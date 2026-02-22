import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('prettier').Options} */
export const prettierOptions = {
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
};

export default [
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', prettierOptions],
    },
  },
];
