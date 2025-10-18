import unusedImportsPlugin from 'eslint-plugin-unused-imports';

import { files } from '../utils/helpers.js';

export default [
  {
    files: [...files.js, ...files.ts],
    plugins: { 'unused-imports': unusedImportsPlugin },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
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
