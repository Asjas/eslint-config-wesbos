module.exports = {
  extends: [
    "eslint-config-airbnb-typescript",
    "./rules/base",
    "./rules/cypress",
    "./rules/import",
    "./rules/jest",
    "./rules/promise",
    "./rules/react",
    "./rules/testing-libary",
    "./rules/typescript",
    "eslint-config-prettier",
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
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
  settings: {
    react: {
      version: "detect",
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
      "Hyperlink",
      { name: "Link", linkAttribute: "href" },
    ],
  },
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".tsx"],
      },
    ],
  },
};
