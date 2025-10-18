import tsEslint from 'typescript-eslint';

import { files } from '../utils/helpers.js';

export default [
  {
    files: files.ts,
    languageOptions: {
      parserOptions: { projectService: true },
    },
    rules: {
      ...tsEslint.configs.recommendedTypeChecked.rules,
      ...tsEslint.configs.stylisticTypeChecked.rules,
      '@typescript-eslint/consistent-type-exports': 'error',
      'no-undef': 'off',
    },
  },
];
