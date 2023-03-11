import importPlugin from 'eslint-plugin-import';

export default [
  {
    plugins: { import: importPlugin },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...importPlugin.configs['recommended'].rules,
      'import/no-unresolved': [
        'warn',
        {
          ignore: [
            '^@\\/', // ignore @/* aliases
            '@(docusaurus|theme)',
          ],
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: '{preact|react|svelte|docusaurus|theme}{/**,**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '*.{css,less,json,html,txt,csv,png,jpg,svg}',
              group: 'object',
              patternOptions: { matchBase: true },
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
