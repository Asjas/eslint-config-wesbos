module.exports = {
  extends: [
    "eslint-config-airbnb-typescript/base",
    "./rules/base",
    "./rules/import",
    "./rules/promise",
    "./rules/node",
    "./rules/testing-library",
    "./rules/typescript",
    "eslint-config-prettier",
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
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
    jest: false,
    es2021: true,
  },
};
