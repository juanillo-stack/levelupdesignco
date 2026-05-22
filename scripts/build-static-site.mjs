import { spawnSync } from "node:child_process";
import {
  copyFile,
  cp,
  readdir,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "..");
const artifactsDir = path.join(workspaceRoot, "artifacts");
const rootDistDir = path.join(workspaceRoot, "dist");

function normalizeName(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function normalizeBasePath(value) {
  let normalized = value.trim();

  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }

  if (!normalized.endsWith("/")) {
    normalized = `${normalized}/`;
  }

  return normalized.replace(/\/{2,}/g, "/");
}

function normalizeSiteUrl(value) {
  return value.trim().replace(/\/+$/, "");
}

function getRepositorySlug() {
  if (process.env.GITHUB_REPOSITORY) {
    return process.env.GITHUB_REPOSITORY;
  }

  const remote = run("git", ["config", "--get", "remote.origin.url"], {
    check: false,
  }).stdout.trim();
  const match = remote.match(/github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);

  return match ? `${match[1]}/${match[2]}` : undefined;
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: workspaceRoot,
    env: process.env,
    stdio: options.stdio ?? "pipe",
    encoding: "utf8",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0 && options.check !== false) {
    const output = [result.stdout, result.stderr].filter(Boolean).join("\n");
    throw new Error(`${command} ${args.join(" ")} failed\n${output}`);
  }

  return result;
}

function getRepositoryName() {
  const repositorySlug = getRepositorySlug();

  return repositorySlug?.split("/").pop() ?? path.basename(workspaceRoot);
}

function getBasePath(target) {
  if (process.env.BASE_PATH) {
    return normalizeBasePath(process.env.BASE_PATH);
  }

  if (target === "github-pages") {
    if (process.env.GITHUB_PAGES_BASE_PATH) {
      return normalizeBasePath(process.env.GITHUB_PAGES_BASE_PATH);
    }

    const repoName = getRepositoryName();

    if (repoName.endsWith(".github.io")) {
      return "/";
    }

    return normalizeBasePath(repoName);
  }

  return "/";
}

function getSiteUrl(target, basePath) {
  if (process.env.VITE_SITE_URL) {
    return normalizeSiteUrl(process.env.VITE_SITE_URL);
  }

  if (target !== "github-pages") {
    return "https://levelupdesign.com";
  }

  if (process.env.GITHUB_PAGES_URL) {
    return normalizeSiteUrl(process.env.GITHUB_PAGES_URL);
  }

  const repositorySlug = getRepositorySlug();

  if (!repositorySlug) {
    return "https://levelupdesign.com";
  }

  const [owner, repo] = repositorySlug.split("/");

  if (repo.endsWith(".github.io")) {
    return `https://${repo}`;
  }

  return normalizeSiteUrl(`https://${owner}.github.io${basePath}`);
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readPackageJson(packageDir) {
  const packageJsonPath = path.join(packageDir, "package.json");
  const contents = await readFile(packageJsonPath, "utf8");
  return JSON.parse(contents);
}

async function getViteCandidates() {
  const entries = await readdir(artifactsDir, { withFileTypes: true });
  const repoName = normalizeName(getRepositoryName());
  const requestedPackage = process.env.STATIC_SITE_PACKAGE;
  const candidates = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const packageDir = path.join(artifactsDir, entry.name);
    const packageJsonPath = path.join(packageDir, "package.json");

    if (!(await pathExists(packageJsonPath))) {
      continue;
    }

    const packageJson = await readPackageJson(packageDir);
    const allDependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    const hasVite = Boolean(allDependencies.vite);
    const hasViteConfig =
      (await pathExists(path.join(packageDir, "vite.config.ts"))) ||
      (await pathExists(path.join(packageDir, "vite.config.js"))) ||
      (await pathExists(path.join(packageDir, "vite.config.mjs")));
    const hasBuildScript = Boolean(packageJson.scripts?.build);
    const hasHtmlEntry = await pathExists(path.join(packageDir, "index.html"));

    if (!hasVite || !hasViteConfig || !hasBuildScript || !hasHtmlEntry) {
      continue;
    }

    const candidateName = normalizeName(
      `${packageJson.name ?? ""} ${entry.name}`,
    );
    let score = 0;

    if (
      requestedPackage &&
      (requestedPackage === packageJson.name || requestedPackage === entry.name)
    ) {
      score += 100;
    }

    if (
      repoName.length >= 5 &&
      (candidateName.includes(repoName) ||
        repoName.includes(candidateName.replace(/^workspace/, "")))
    ) {
      score += 20;
    }

    if (/mock|sandbox|demo|test/.test(candidateName)) {
      score -= 10;
    }

    candidates.push({
      dir: packageDir,
      name: packageJson.name ?? entry.name,
      score,
    });
  }

  return candidates.sort(
    (a, b) => b.score - a.score || a.name.localeCompare(b.name),
  );
}

async function detectDeployableViteApp() {
  const candidates = await getViteCandidates();

  if (candidates.length === 0) {
    throw new Error("No deployable Vite app was detected under artifacts/.");
  }

  if (candidates.length > 1 && candidates[0].score === candidates[1].score) {
    const names = candidates.map((candidate) => candidate.name).join(", ");
    throw new Error(
      `Multiple deployable Vite apps were detected (${names}). Set STATIC_SITE_PACKAGE to choose one.`,
    );
  }

  return candidates[0];
}

async function getBuildOutputDir(appDir) {
  const outputDirs = ["dist/public", "dist", "build"].map((dir) =>
    path.join(appDir, dir),
  );

  for (const outputDir of outputDirs) {
    if (await pathExists(path.join(outputDir, "index.html"))) {
      return outputDir;
    }
  }

  throw new Error(
    "Build finished, but no static output containing index.html was found.",
  );
}

async function updateHtmlShell(filePath, siteUrl) {
  const canonicalUrl = `${siteUrl}/`;
  const html = await readFile(filePath, "utf8");
  let updated = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );

  if (!updated.includes('property="og:url"')) {
    updated = updated.replace(
      /(<meta property="og:site_name" content="[^"]*" \/>)/,
      `$1\n    <meta property="og:url" content="${canonicalUrl}" />`,
    );
  }

  await writeFile(filePath, updated);
}

async function main() {
  const target = process.env.DEPLOY_TARGET ?? "static";
  const app = await detectDeployableViteApp();
  const basePath = getBasePath(target);
  const siteUrl = getSiteUrl(target, basePath);
  const port = process.env.PORT ?? "8080";

  console.log(`Detected framework: Vite`);
  console.log(`Detected static app: ${app.name}`);
  console.log(`Deploy target: ${target}`);
  console.log(`Base path: ${basePath}`);
  console.log(`Site URL: ${siteUrl}`);

  const buildResult = spawnSync(
    "pnpm",
    ["--filter", app.name, "run", "build"],
    {
      cwd: workspaceRoot,
      env: {
        ...process.env,
        BASE_PATH: basePath,
        PORT: port,
        VITE_SITE_URL: siteUrl,
      },
      stdio: "inherit",
    },
  );

  if (buildResult.error) {
    throw buildResult.error;
  }

  if (buildResult.status !== 0) {
    process.exit(buildResult.status ?? 1);
  }

  const outputDir = await getBuildOutputDir(app.dir);

  await rm(rootDistDir, { recursive: true, force: true });
  await cp(outputDir, rootDistDir, { recursive: true });
  await updateHtmlShell(path.join(rootDistDir, "index.html"), siteUrl);
  await copyFile(
    path.join(rootDistDir, "index.html"),
    path.join(rootDistDir, "404.html"),
  );
  await writeFile(path.join(rootDistDir, ".nojekyll"), "");

  console.log(
    `Static output written to ${path.relative(workspaceRoot, rootDistDir)}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
