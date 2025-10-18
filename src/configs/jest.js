import jest from 'eslint-plugin-jest';
import jestFormatting from 'eslint-plugin-jest-formatting';
import globals from 'globals';

import { files } from '../utils/helpers.js';

export default [
  {
    files: files.test,
    plugins: {
      jest,
      'jest-formatting': jestFormatting,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // Jest plugin customization
      ...jest.configs.recommended.rules,
      ...jest.configs.style.rules,
      'jest/consistent-test-it': ['error', { fn: 'it' }],
      'jest/max-nested-describe': [
        'error',
        {
          max: 3,
        },
      ],
      'jest/no-duplicate-hooks': 'error',
      'jest/no-conditional-in-test': 'warn',
      'jest/no-done-callback': 'warn',
      'jest/no-large-snapshots': ['warn', { maxSize: 100, inlineMaxSize: 20 }],
      'jest/no-mocks-import': 'off',
      'jest/no-test-return-statement': 'warn',
      'jest/prefer-expect-resolves': 'error',
      'jest/prefer-strict-equal': 'warn',
      'jest/prefer-spy-on': 'off',
      'jest/prefer-hooks-on-top': 'error',
      'jest/prefer-todo': 'error',
      'jest/require-hook': 'warn',
      'jest/prefer-called-with': 'warn',
      'jest/no-conditional-expect': 'warn',
      'jest/no-identical-title': 'warn',
      'jest/prefer-each': 'error',
      'jest/prefer-equality-matcher': 'error',
      'jest/prefer-comparison-matcher': 'error',
      'jest/prefer-mock-promise-shorthand': 'error',
      'jest/prefer-lowercase-title': [
        'error',
        {
          ignore: ['describe'],
        },
      ],

      // Jest-formatting plugin customization
      'jest-formatting/padding-around-after-all-blocks': 'error',
      'jest-formatting/padding-around-after-each-blocks': 'error',
      'jest-formatting/padding-around-before-all-blocks': 'error',
      'jest-formatting/padding-around-before-each-blocks': 'error',
      'jest-formatting/padding-around-expect-groups': 'error',
      'jest-formatting/padding-around-describe-blocks': 'error',
      'jest-formatting/padding-around-test-blocks': 'error',
    },
  },
];
