const baseRules = require('./base');

module.exports = {
  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['@babel', 'html'],
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
    browser: true,
    jest: true,
    es2021: true,
    node: false,
  },
  settings: {
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  rules: {
    ...baseRules,

    // Custom React rules
    'react/button-has-type': 2,
    'react/no-children-prop': 0,
    'react/prop-types': 0,
    'react/require-default-props': 2,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],

    // Custom React Hooks rules
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
};
