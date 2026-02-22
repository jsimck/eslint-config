import {
  base,
  imprt,
  javascript,
  prettier,
  react,
  sonarjs,
  stylistic,
  typescript,
  unicorn,
  unusedImports,
} from './src/configs/index.js';

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
  ...prettier,
];
