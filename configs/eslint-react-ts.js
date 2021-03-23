const eslintReact = require('./eslint-react');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  // then add some extra good stuff for Typescript
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // Then we add our own custom typescript rules
  rules: {
    ...eslintReact,
    // This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
