module.exports = {
  extends: [
    'eslint-config-airbnb-typescript/base',
    './rules/base',
    './rules/import',
    './rules/jest',
    './rules/promise',
    './rules/node',
    './rules/testing-libary',
    './rules/typescript',
    'eslint-config-prettier',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: false,
    node: true,
    jest: true,
    es2021: true,
  },
};
