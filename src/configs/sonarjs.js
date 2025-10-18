import sonarjs from 'eslint-plugin-sonarjs';

import { files } from '../utils/helpers.js';

export default [
  {
    files: [...files.ts, ...files.js],
    plugins: { sonarjs },
    rules: {
      ...sonarjs.configs.recommended.rules,
      'sonarjs/cognitive-complexity': 'warn',
      'sonarjs/no-identical-functions': ['warn', 3],
      'sonarjs/no-duplicate-string': ['warn', { threshold: 10 }],
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/no-useless-catch': 'warn',
      'sonarjs/no-inverted-boolean-check': 'warn',
    },
  },
  {
    files: files.test,
    rules: {
      'sonarjs/no-duplicate-string': 'off',
    },
  },
];
