import globals from 'globals';

export default [
  {
    ignores: [
      '**/.*', // dotfiles like .env, .gitignore
      '**/.*/**', // dotfolders like .next/, .cache/, .turbo/
      '**/out/**',
      '**/dist/**',
      '**/build/**',
      '**/generated/**',
      '**/__generated__/**',
      '**/coverage/**',
      '**/storybook-static/**',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
];
