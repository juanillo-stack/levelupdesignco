/**
 * Genera miniaturas 16:10 para el portfolio desde las webs en producción.
 * Uso: node scripts/capture-portfolio-thumbs.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(
  root,
  "artifacts/levelup-design/src/assets/portfolio",
);

const TARGET_W = 1600;
const TARGET_H = 1000;

const shots = [
  {
    id: "judith",
    url: "https://cestasyeventosjudith.vercel.app/",
    /** Recorte del hero: zona de titular (evita retrato lateral). */
    clip: { x: 0, y: 0, width: 1100, height: 900 },
  },
  {
    id: "levelup-interiores",
    url: "https://levelupinteriores.es/",
    clip: { x: 0, y: 0, width: 1600, height: 900 },
  },
];

async function ensurePlaywright() {
  try {
    return require("playwright");
  } catch {
    const { execSync } = await import("node:child_process");
    execSync("npm install --no-save playwright@1.51.0", {
      cwd: root,
      stdio: "inherit",
    });
    execSync("npx playwright install chromium", {
      cwd: root,
      stdio: "inherit",
    });
    return require("playwright");
  }
}

async function cropWithSharp(inputBuffer, id) {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    const { execSync } = await import("node:child_process");
    execSync("npm install --no-save sharp@0.34.2", {
      cwd: root,
      stdio: "inherit",
    });
    sharp = require("sharp");
  }

  const webpPath = path.join(outDir, `${id}.webp`);
  const jpgPath = path.join(outDir, `${id}.jpg`);

  await sharp(inputBuffer)
    .resize(TARGET_W, TARGET_H, {
      fit: "cover",
      position: "centre",
    })
    .webp({ quality: 86 })
    .toFile(webpPath);

  await sharp(inputBuffer)
    .resize(TARGET_W, TARGET_H, {
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(jpgPath);

  return { webpPath, jpgPath };
}

async function main() {
  const { chromium } = await ensurePlaywright();
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  for (const shot of shots) {
    const page = await browser.newPage({
      viewport: { width: 1600, height: 1000 },
      deviceScaleFactor: 2,
    });

    await page.goto(shot.url, {
      waitUntil: "networkidle",
      timeout: 90_000,
    });
    await page.waitForTimeout(1200);

    const buffer = await page.screenshot({
      type: "png",
      clip: shot.clip,
    });

    const paths = await cropWithSharp(buffer, shot.id);
    console.log(`OK ${shot.id}:`, paths.webpPath);
    await page.close();
  }

  await browser.close();
  console.log("Miniaturas generadas en", outDir);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
