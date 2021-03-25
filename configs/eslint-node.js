module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
    './rules/import',
    './rules/node',
    './rules/promise',
    'eslint-config-prettier',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    browser: false,
    node: true,
    jest: true,
    es2021: true,
  },
  rules: {},
};
