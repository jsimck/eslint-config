import js from '@eslint/js';

import { files } from '../utils/helpers.js';

export default [
  {
    files: [...files.js],
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules,
      'no-return-await': 'error',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      curly: ['error', 'all'],
      'dot-notation': ['error'],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          args: 'none',
        },
      ],
    },
  },
];
