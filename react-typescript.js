module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin', 'html'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint-config-airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    './rules/base',
    './rules/import',
    './rules/promise',
    './rules/react',
    './rules/typescript',
    'eslint-config-prettier/@typescript-eslint',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
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
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx'],
      },
    ],
  },
};
