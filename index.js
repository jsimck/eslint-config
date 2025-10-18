import {
  base,
  imprt,
  javascript,
  prettier,
  react,
  sonarjs,
  typescript,
  unicorn,
  unusedImports,
} from './src/configs/index.js';

export default [
  ...base,
  ...javascript,
  ...typescript,
  ...react,
  ...imprt,
  ...sonarjs,
  ...unicorn,
  ...unusedImports,
  ...prettier,
];
