import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          jsxSingleQuote: true,
          bracketSameLine: false,
          arrowParens: 'avoid',
        },
      ],
    },
  },
];
