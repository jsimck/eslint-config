import sortClassMembers from 'eslint-plugin-sort-class-members';

import { files } from '../utils/helpers.js';

export default [
  {
    files: [...files.js, ...files.ts],
    ...sortClassMembers.configs['flat/recommended'],
    rules: {
      ...sortClassMembers.configs['flat/recommended'].rules,
      'sort-class-members/sort-class-members': [
        'error',
        {
          order: [
            '[static-properties]',
            '[static-methods]',
            '[properties]',
            '[conventional-private-properties]',
            'constructor',
            '[methods]',
            '[conventional-private-methods]',
          ],
          accessorPairPositioning: 'together',
        },
      ],
    },
  },
];
