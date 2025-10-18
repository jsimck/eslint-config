import tsEslint from 'typescript-eslint';

import { files } from '../utils/helpers.js';

export default [
  {
    files: files.ts,
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        jsDocParsingMode: 'none',
        jsxPragma: null,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    rules: {
      ...tsEslint.configs.eslintRecommended.rules,
      ...tsEslint.configs.recommended.rules,
      ...tsEslint.configs.stylistic.rules,
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      'dot-notation': 'off',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-expect-error': 'allow-with-description' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          args: 'none',
        },
      ],
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
      // turn off eslint undef
      'no-undef': 'off',
    },
  },
];
