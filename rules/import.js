module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
  },
};
