import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    files: ['**/*.jsx', '**/*.tsx'],
    ...reactRecommended,
    ...reactJsxRuntime,
  },
];
