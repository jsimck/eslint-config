# @jsimck/eslint-config

## 3.1.0

### Minor Changes

- [`ef55c06`](https://github.com/jsimck/eslint-config/commit/ef55c06341cddd1b90bf152e830dc72dfd7243b1) Thanks [@jsimck](https://github.com/jsimck)! - - Extract stylistic rules from `base` into a separate `stylistic` config
  - `base` is now minimal: global ignores, browser/node/es2025 globals, parser options
  - Export `prettierOptions` for easy extension with plugins (e.g. Tailwind)
  - Add `globals.es2025` for modern JS builtins (Iterator, Float16Array, etc.)
  - Add `**/__generated__/**` to default ignores (GraphQL codegen)
  - Remove `**/docs/**` and `**/node_modules/**` from ignores (too broad / redundant)
  - Add Advanced Usage section to README (composing, overriding, prettier plugins)

## 3.0.1

### Patch Changes

- [`849963d`](https://github.com/jsimck/eslint-config/commit/849963d0fcfcca276861b49b6ea11f90208390ed) Thanks [@jsimck](https://github.com/jsimck)! - updated package.json metadata

## 3.0.0

### Major Changes

- [#8](https://github.com/jsimck/eslint-config/pull/8) [`adf5563`](https://github.com/jsimck/eslint-config/commit/adf5563d3c111ff78eef6cd9eee232c9f31d093c) Thanks [@jsimck](https://github.com/jsimck)! - Upgrade to ESLint 9 and bump all dependencies to latest versions. Peer dep changed from `eslint >=8` to `eslint 9`. Notable: react-hooks v7 (adds React Compiler rules), unicorn v63, @stylistic v5, globals v17.

- [`cb0b0ca`](https://github.com/jsimck/eslint-config/commit/cb0b0ca1ed82900c429e73df629fa3fa14bb428d) Thanks [@jsimck](https://github.com/jsimck)! - V3 release with ESLint 9 support, flat config and all dependencies updated including some new recommended configs.

### Patch Changes

- [#8](https://github.com/jsimck/eslint-config/pull/8) [`a7af6d4`](https://github.com/jsimck/eslint-config/commit/a7af6d479ef147c425309be69bbe2a7a22777967) Thanks [@jsimck](https://github.com/jsimck)! - Reverted to eslint 9 due to plugin incompatibility

- [#8](https://github.com/jsimck/eslint-config/pull/8) [`4b34376`](https://github.com/jsimck/eslint-config/commit/4b343763ed7b8e6cd51a2531c5e676f4cfd4ee9f) Thanks [@jsimck](https://github.com/jsimck)! - Sonar rules revision, reneabled most configs on all files

## 3.0.0-next.2

### Patch Changes

- [#8](https://github.com/jsimck/eslint-config/pull/8) [`4b34376`](https://github.com/jsimck/eslint-config/commit/4b343763ed7b8e6cd51a2531c5e676f4cfd4ee9f) Thanks [@jsimck](https://github.com/jsimck)! - Sonar rules revision, reneabled most configs on all files

## 3.0.0-next.1

### Patch Changes

- [#8](https://github.com/jsimck/eslint-config/pull/8) [`a7af6d4`](https://github.com/jsimck/eslint-config/commit/a7af6d479ef147c425309be69bbe2a7a22777967) Thanks [@jsimck](https://github.com/jsimck)! - Reverted to eslint 9 due to plugin incompatibility

## 3.0.0-next.0

### Major Changes

- [#7](https://github.com/jsimck/eslint-config/pull/7) [`adf5563`](https://github.com/jsimck/eslint-config/commit/adf5563d3c111ff78eef6cd9eee232c9f31d093c) Thanks [@github-actions](https://github.com/apps/github-actions)! - Upgrade to ESLint 10 and bump all dependencies to latest versions. Peer dep changed from `eslint >=98` to `eslint >=10`. Notable: react-hooks v7 (adds React Compiler rules), unicorn v63, @stylistic v5, globals v17.

## 2.0.1

### Patch Changes

- [`2ebf315`](https://github.com/jsimck/eslint-config/commit/2ebf315f8590fde7731d9fde2ba885ed8b3fc2bf) Thanks [@jsimck](https://github.com/jsimck)! - Fixed broken release

## 2.0.0

### Major Changes

- [`4c7b374`](https://github.com/jsimck/eslint-config/commit/4c7b3743c6b046f8b7ceda9fce3332343823a641) Thanks [@jsimck](https://github.com/jsimck)! - Changed bunch of configurations and added new presets. (see README.md for more information). While this version should be backwards compatible, due the amount of chagnes, I chose to release it as major.

## 1.1.1

### Patch Changes

- [`d344cb9`](https://github.com/jsimck/eslint-config/commit/d344cb99f2d579bf8948d3580203d17de07b368a) Thanks [@jsimck](https://github.com/jsimck)! - Testing CI release

## 1.1.0

### Minor Changes

- [`3713940`](https://github.com/jsimck/eslint-config/commit/371394013aad3e1fdbbe9f50132cfef98fafe869) Thanks [@jsimck](https://github.com/jsimck)! - Added additional React/JSX custom rules

## 1.0.1

### Patch Changes

- [`aaf8a01`](https://github.com/jsimck/eslint-config/commit/aaf8a012dc84c2b94fed9dce0258184d8d2dad64) Thanks [@jsimck](https://github.com/jsimck)! - Updated @typescript-eslint/no-unused-vars to allow unused arguments

## 1.0.0

### Major Changes

- [`496381d`](https://github.com/jsimck/eslint-config/commit/496381d58589a0bfec10b3d73e37ce01644899a4) Thanks [@jsimck](https://github.com/jsimck)! - Initial release
