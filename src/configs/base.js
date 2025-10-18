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
      // Stylistic has to be migrated -->>
      // Lines between class member methods
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],

      // Line spacing
      'padding-line-between-statements': [
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
