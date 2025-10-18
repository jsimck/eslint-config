import next from '@next/eslint-plugin-next';

import { files } from '../utils/helpers.js';

export default [
  {
    files: [...files.js, ...files.ts],
    plugins: { '@next/next': next },
    rules: {
      ...next.configs.recommended.rules,
    },
  },
];
