# ESLint + Prettier

## Configs

### ESLint Config

Create a file named `.eslintrc.js` in the root folder of the project. Then add one of the following configs.

#### Node.js Config

```js
const { nodeEslint } = require('eslint-config-asjas');

module.exports = {
  ...nodeEslint,
};
```

#### Node.js TypeScript Config

```js
const { nodeEslintTS } = require('eslint-config-asjas');

module.exports = {
  ...nodeEslintTS,
};
```

#### React Config

```js
const { reactEslint } = require('eslint-config-asjas');

module.exports = {
  ...reactEslint,
};
```

#### React TypeScript Config

```js
const { reactEslintTS } = require('eslint-config-asjas');

module.exports = {
  ...reactEslintTS,
};
```

### Prettier Config

Create a file named `prettier.config.js` in the root folder of the project. Then add the following config.

```js
const { prettierConfig } = require('eslint-config-asjas');

module.exports = {
  ...prettierConfig,
};
```

## NPM Scripts

```json
"scripts": {
  "lint": "eslint --ignore-path .gitignore .",
  "lint:fix": "eslint --ignore-path .gitignore --fix .",
  "format": "prettier --ignore-path .gitignore --write",
  "check-format": "prettier --ignore-path .gitignore --list-different",
  "validate": "npm run check-format && npm run lint"
}
```

## VS Code extensions

* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### VS Code settings

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.requireConfig": true,
}
```
