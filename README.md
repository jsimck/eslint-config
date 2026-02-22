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

Default export already includes several presets. You can also import individual configs from `@jsimck/eslint-config/configs`.

| Config Name             | Description                                                       | Included In Default |
| ----------------------- | ----------------------------------------------------------------- | ------------------- |
| `base`                  | Global ignores, browser/node globals, parser options              | ✅                  |
| `stylistic`             | `@stylistic/eslint-plugin` spacing and line rules                 | ✅                  |
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

## Advanced Usage

All configs are individually importable from `@jsimck/eslint-config/configs`, so you can compose only what you need:

```js
import {
  base,
  stylistic,
  typescript,
  react,
  imprt,
  unusedImports,
} from '@jsimck/eslint-config/configs';

export default [
  ...base,
  ...stylistic,
  ...typescript,
  ...react,
  ...imprt,
  ...unusedImports,
];
```

> **Note:** The `base` config provides global ignores (node_modules, dist, build, etc.) and browser/node globals. It's recommended as a foundation for any custom composition.

### Overriding Rules

You can override any rule by appending your own config object after the presets:

```js
import baseConfig from '@jsimck/eslint-config';

export default [
  ...baseConfig,
  {
    rules: {
      'prettier/prettier': ['error', { singleQuote: false, semi: false }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
```

### Adding Prettier Plugins

The `prettierOptions` object is exported separately, so you can extend it with plugins like Tailwind CSS class sorting:

```js
import { createRequire } from 'node:module';
import baseConfig from '@jsimck/eslint-config';
import { prettierOptions } from '@jsimck/eslint-config/configs';

const require = createRequire(import.meta.url);

export default [
  ...baseConfig,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          ...prettierOptions,
          plugins: [
            require.resolve('prettier-plugin-tailwindcss'),
          ],
        },
      ],
    },
  },
];
```

### Replacing a Config

To use the defaults but swap out a specific config (e.g. use your own prettier setup), import configs individually and omit what you don't need:

```js
import {
  base,
  stylistic,
  javascript,
  typescript,
  react,
  imprt,
  sonarjs,
  unicorn,
  unusedImports,
} from '@jsimck/eslint-config/configs';

export default [
  ...base,
  ...stylistic,
  ...javascript,
  ...typescript,
  ...react,
  ...imprt,
  ...sonarjs,
  ...unicorn,
  ...unusedImports,
  // your own prettier or formatting config here
];
```

## Contributing

Include a [changeset](https://github.com/changesets/changesets) with user-facing changes:

```bash
pnpm changeset
```

## Release

```bash
pnpm release
```
