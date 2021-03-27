module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/base',
    './rules/import',
    './rules/promise',
    './rules/react',
    'eslint-config-prettier',
  ].map(require.resolve),
  plugins: ['html'],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  rules: {},
};
