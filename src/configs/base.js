import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

import { files } from '../utils/helpers.js';

export default [
  {
    ignores: [
      '**/out/**',
      '**/*.gen.ts',
      '**/node_modules/**',
      '**/.next/**',
      '**/.expo/**',
      '**/dist/**',
      '**/build/**',
      '**/docs/**',
      '**/storybook-static/**',
      '**/.docusaurus/**',
      '**/coverage/**',
    ],
  },
  {
    files: [...files.js, ...files.ts],
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // Lines between class member methods
      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],

      // Line spacing
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: 'class',
          prev: '*',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: 'class',
        },
        {
          blankLine: 'always',
          next: 'return',
          prev: '*',
        },
        {
          blankLine: 'always',
          next: 'case',
          prev: '*',
        },
        {
          blankLine: 'always',
          next: 'default',
          prev: '*',
        },
        {
          blankLine: 'always',
          next: 'export',
          prev: '*',
        },
        {
          blankLine: 'any',
          next: 'case',
          prev: 'case',
        },
        {
          blankLine: 'any',
          next: 'export',
          prev: 'export',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: 'import',
        },
        {
          blankLine: 'any',
          next: 'import',
          prev: 'import',
        },
      ],
    },
  },
];
