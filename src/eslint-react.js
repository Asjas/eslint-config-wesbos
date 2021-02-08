const base = require('./base-rules');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  rules: {
    ...base,
    'react/display-name': 1,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 2,
    'react/no-unescaped-entities': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/accessible-emoji': 1,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
      },
    ],
    'react/require-default-props': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.tsx'],
      },
    ],
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': [
      1,
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
  plugins: ['html', 'react-hooks'],
};
