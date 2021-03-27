module.exports = {
  extends: [
    "eslint-config-airbnb",
    "./rules/base",
    "./rules/import",
    "./rules/jest",
    "./rules/promise",
    "./rules/react",
    "./rules/testing-libary",
    "eslint-config-prettier",
  ].map(require.resolve),
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
    jest: true,
    es2021: true,
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
};
