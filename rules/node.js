module.exports = {
  plugins: ["node"],
  extends: ["plugin:node/recommended"],
  settings: {
    node: {
      allowModules: ["electron"],
      resolvePaths: [__dirname],
      tryExtensions: [".js", ".ts", ".json", ".node"],
    },
  },
  rules: {
    "node/no-unsupported-features/es-syntax": 0,
  },
};
