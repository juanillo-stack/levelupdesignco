import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { withGithubPagesEnv } from "./github-pages-env.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

console.log("Building static site for levelupsolutions.es...");

const build = spawnSync("node", ["./scripts/build-static-site.mjs"], {
  cwd: root,
  env: withGithubPagesEnv(),
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

console.log("Publishing ./dist to gh-pages branch...");

const publish = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  [
    "gh-pages",
    "-d",
    "dist",
    "-t",
    "-b",
    "gh-pages",
    "-m",
    "Deploy levelupsolutions.es",
  ],
  {
    cwd: root,
    stdio: "inherit",
  },
);

process.exit(publish.status ?? 1);
