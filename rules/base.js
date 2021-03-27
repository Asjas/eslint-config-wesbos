module.exports = {
  plugins: ['html'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'consistent-return': 2,
    'func-names': 0,
    'max-len': 0,
    'no-alert': 1,
    'no-console': 1,
    'no-debugger': 1,
    'no-param-reassign': 2,
    'no-plusplus': 0,
    'no-restricted-globals': 0,
    'no-restricted-syntax': [2, 'ForInStatement', 'DoWhileStatement', 'LabeledStatement', 'WithStatement'],
    'no-return-assign': [2, 'except-parens'],
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-void': 0,
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'all',
      },
    ],
    radix: 0,
    'space-before-function-paren': [2, 'always'],
  },
};
