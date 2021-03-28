module.exports = {
  extends: [
    "eslint-config-airbnb-typescript/base",
    "./rules/base",
    "./rules/cypress",
    "./rules/import",
    "./rules/jest",
    "./rules/promise",
    "./rules/testing-library",
    "./rules/typescript",
    "eslint-config-prettier",
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    "jest/globals": true,
    "cypress/globals": true,
  },
};
