# ESLint + Prettier

## Configs

### ESLint Config

Create a file named `.eslintrc` in the root folder of the project. Then add one of the following configs.

#### Node.js Config

```json
{
  "extends": ["eslint-config-asjas/node"]
}
```

#### Node.js TypeScript Config

```json
{
  "extends": ["eslint-config-asjas/node-typescript"]
}
```

#### React Config

```json
{
  "extends": ["eslint-config-asjas/react"]
}
```

#### React TypeScript Config

```json
{
  "extends": ["eslint-config-asjas/react-typescript"]
}
```

#### ESLint Ignore

You can create a `.eslintignore` file and then add any files or folders to it that you do not want ESLint to lint.

```json
# don't ever lint node_modules
node_modules

# don't lint build output (make sure it's set to your correct build folder name)
dist
build

# don't lint cache output
.cache
.next
.keystone

# don't lint nyc coverage output
coverage
```

### Prettier Config

Create a file named `.prettierrc.js` in the root folder of the project. Then add the following config.

```js
module.exports = {
  ...require('eslint-config-asjas/prettier'),
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

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### VS Code settings

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.requireConfig": true
}
```
