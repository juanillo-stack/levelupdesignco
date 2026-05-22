# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a pnpm monorepo for **LevelUp Design Co.**, a Spanish-language web design agency site. The primary deliverable is the Vite-powered React frontend at `artifacts/levelup-design/`.

See `replit.md` for stack details, directory layout, and run commands.

### Node.js version

The project requires **Node.js 24** (`packageManager: pnpm@10.33.3`). The VM update script installs Node 24 via nvm automatically.

### Running the frontend dev server

```
pnpm run dev
```

Starts the Vite dev server on **port 8080** (binds to `0.0.0.0`). No environment variables required for the frontend.

### TypeScript checking

- `pnpm --filter @workspace/levelup-design run typecheck` — frontend only
- `pnpm --filter @workspace/api-server run typecheck` — API server (requires lib packages built first)

**Gotcha:** The API server typecheck depends on TypeScript project references from `lib/api-zod` and `lib/db`. Before running the API server typecheck, build those references:

```
npx tsc --build lib/api-zod lib/db
```

### Building

```
pnpm run build
```

Runs `scripts/build-static-site.mjs` which typechecks and builds the frontend via Vite.

### API server (optional)

The Express API server (`artifacts/api-server/`) is scaffolded but only has a `/healthz` endpoint. It requires a `DATABASE_URL` env var pointing to PostgreSQL. The frontend does not consume it. To run:

```
pnpm --filter @workspace/api-server run dev
```

### No tests / linting

The codebase currently has no test framework (no vitest/jest) and no ESLint config. The only code quality check available is `typecheck`.

### Formatting

Prettier is configured at the workspace root.
