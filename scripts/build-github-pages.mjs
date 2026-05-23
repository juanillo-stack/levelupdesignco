import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { withGithubPagesEnv } from "./github-pages-env.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const result = spawnSync("node", ["./scripts/build-static-site.mjs"], {
  cwd: root,
  env: withGithubPagesEnv(),
  stdio: "inherit",
});

process.exit(result.status ?? 1);
