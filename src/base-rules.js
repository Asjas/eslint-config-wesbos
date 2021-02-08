module.exports = {
  'no-debugger': 1,
  'no-alert': 0,
  'no-return-assign': ['error', 'except-parens'],
  'no-restricted-syntax': [2, 'ForInStatement', 'DoWhileStatement', 'LabeledStatement', 'WithStatement'],
  'no-unused-vars': [
    1,
    {
      ignoreRestSiblings: true,
      argsIgnorePattern: 'res|next|^err',
    },
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
    },
  ],
  'arrow-body-style': [2, 'as-needed'],
  'no-unused-expressions': [
    2,
    {
      allowTaggedTemplates: true,
    },
  ],
  'no-param-reassign': [
    2,
    {
      props: false,
    },
  ],
  'no-console': 1,
  'import/prefer-default-export': 0,
  import: 0,
  'func-names': 0,
  'space-before-function-paren': 0,
  'comma-dangle': 0,
  'max-len': 0,
  'import/extensions': 0,
  'no-underscore-dangle': 0,
  'consistent-return': 0,
  radix: 0,
  'no-shadow': [
    2,
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
    },
  ],
};
