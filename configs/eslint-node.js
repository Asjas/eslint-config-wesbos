module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
    './rules/import',
    './rules/node',
    './rules/promise',
    'eslint-config-prettier',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
    ecmaVersion: 2021,
  },
  env: {
    browser: false,
    node: true,
    jest: true,
    es2021: true,
  },
  rules: {},
};
