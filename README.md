# @jsimck/eslint-config

Opinionated shareable ESLint flat config for JavaScript/TypeScript projects, including React, import ordering, SonarJS, Unicorn, and Prettier.

## Install

```bash
pnpm add -D eslint@9 @jsimck/eslint-config
```

## Usage

Create `eslint.config.js` (or `eslint.config.mjs`) in your project root:

```js
import baseConfig from '@jsimck/eslint-config';

export default [...baseConfig];
```

## Lint Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "pnpm lint --fix"
  }
}
```

## Available Configs

Default export already includes several presets. You can also compose extra presets manually from `@jsimck/eslint-config/src/configs/index.js`.

| Config Name             | Description                                                       | Included In Default |
| ----------------------- | ----------------------------------------------------------------- | ------------------- |
| `base`                  | Base ignores, globals, parser options, core style spacing rules   | ✅                  |
| `javascript`            | `@eslint/js` recommended + custom JS rules                        | ✅                  |
| `typescript`            | TypeScript parser and non-typechecked TS rules                    | ✅                  |
| `react`                 | `eslint-plugin-react`, `react-hooks`, `react-refresh`, `jsx-a11y` | ✅                  |
| `imprt`                 | `eslint-plugin-import-x` rules and resolver setup                 | ✅                  |
| `sonarjs`               | `eslint-plugin-sonarjs` recommended + overrides                   | ✅                  |
| `unicorn`               | `eslint-plugin-unicorn` recommended + overrides                   | ✅                  |
| `unusedImports`         | `eslint-plugin-unused-imports`                                    | ✅                  |
| `prettier`              | `eslint-plugin-prettier/recommended` + local prettier options     | ✅                  |
| `vitest`                | `@vitest/eslint-plugin` rules for tests                           | ❌                  |
| `typescriptTypeChecked` | Type-aware TypeScript rules (requires project service)            | ❌                  |
| `sortClassMembers`      | `eslint-plugin-sort-class-members`                                | ❌                  |

Example with optional configs:

```js
import baseConfig from '@jsimck/eslint-config';
import {
  vitest,
  typescriptTypeChecked,
  sortClassMembers,
} from '@jsimck/eslint-config/configs';

export default [
  ...baseConfig,
  ...typescriptTypeChecked,
  ...sortClassMembers,
  ...vitest,
];
```

## VS Code

No special VS Code ESLint settings are required for flat config with current ESLint/extension versions.

## Contributing

Include a [changeset](https://github.com/changesets/changesets) with user-facing changes:

```bash
pnpm changeset
```

## Release

```bash
pnpm release
```
