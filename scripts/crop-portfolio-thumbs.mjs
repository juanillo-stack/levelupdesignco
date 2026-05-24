/**
 * Genera miniaturas 1600x1000 para tarjetas (16:10).
 * Uso: node scripts/crop-portfolio-thumbs.mjs
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { execSync } from "node:child_process";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "artifacts/levelup-design/src/assets/portfolio");

const TARGET_W = 1600;
const TARGET_H = 1000;

const crops = [
  {
    id: "judith",
    source: path.resolve(
      root,
      "../cestasyeventosjudith/src/assets/judith.jpg",
    ),
    focusX: 0.52,
    focusY: 0.32,
  },
  {
    id: "levelup-interiores",
    source: path.resolve(
      root,
      "../levelupinteriores/frontend/src/assets/hero.jpg",
    ),
    focusX: 0.55,
    focusY: 0.42,
  },
];

function ensureSharp() {
  try {
    return require("sharp");
  } catch {
    execSync("npm install --no-save sharp@0.34.2", {
      cwd: root,
      stdio: "inherit",
    });
    return require("sharp");
  }
}

async function cropCard(sharp, { source, id, focusX, focusY }) {
  const meta = await sharp(source).metadata();
  const targetRatio = TARGET_W / TARGET_H;
  const srcRatio = meta.width / meta.height;

  let cropW;
  let cropH;

  if (srcRatio > targetRatio) {
    cropH = meta.height;
    cropW = Math.round(cropH * targetRatio);
  } else {
    cropW = meta.width;
    cropH = Math.round(cropW / targetRatio);
  }

  const left = Math.max(
    0,
    Math.min(Math.round((meta.width - cropW) * focusX), meta.width - cropW),
  );
  const top = Math.max(
    0,
    Math.min(Math.round((meta.height - cropH) * focusY), meta.height - cropH),
  );

  const dest = path.join(outDir, `${id}.jpg`);
  await sharp(source)
    .extract({ left, top, width: cropW, height: cropH })
    .resize(TARGET_W, TARGET_H, { fit: "fill" })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(dest);

  console.log("OK", dest);
}

async function main() {
  const sharp = ensureSharp();
  await mkdir(outDir, { recursive: true });

  for (const item of crops) {
    await cropCard(sharp, item);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
