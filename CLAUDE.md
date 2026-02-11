## Overview

- Shared, opinionated ESLint flat config package (`@jsimck/eslint-config`) published to npm. Uses ESM modules throughout. Each ESLint plugin/concern has its own config file in `src/configs/`, composed together in `index.js`.
- Uses pnpm as package manager + ESM modules ("type": "module")

## Commands

```bash
pnpm install              # install deps
pnpm lint                 # lint all files
pnpm lint:fix             # lint + autofix
pnpm changeset            # create a changeset entry before releasing
pnpm release              # publish to npm via changesets
```

No test suite — validation is done via `pnpm lint` (the config lints itself).

## Architecture

- **Entry point:** `index.js` — spreads the default config set (base, javascript, typescript, react, import, sonarjs, unicorn, unusedImports, prettier).
- **Config modules:** `src/configs/*.js` — each exports a flat config array. All re-exported from `src/configs/index.js`.
- **Default configs** (always included via `index.js`): base, javascript, typescript, react, import, sonarjs, unicorn, unusedImports, prettier.
- **Optional configs** (consumers import separately from `@jsimck/eslint-config/configs`): vitest, sortClassMembers, typescriptTypeChecked.
- **Shared helpers:** `src/utils/helpers.js` — `files` object with glob patterns for ts, js, jsx, and test files. Used across configs to scope rules to specific file types.

## Release Process

Uses Changesets with GitHub Actions CI. Run `pnpm changeset` to create a changeset, merge to `main`, CI auto-publishes to npm.
