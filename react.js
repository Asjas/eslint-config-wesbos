module.exports = {
  plugins: ['html'],
  extends: [
    'eslint-config-airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    './rules/base',
    './rules/import',
    './rules/promise',
    './rules/react',
    'eslint-config-prettier',
  ].map(require.resolve),
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
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
      'Hyperlink',
      { name: 'Link', linkAttribute: 'href' },
    ],
  },
};
