const reactConfig = require('./react');

module.exports = {
  ...reactConfig,
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'eslint-config-prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        'react/jsx-filename-extension': [
          2,
          {
            extensions: ['.tsx'],
          },
        ],
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
