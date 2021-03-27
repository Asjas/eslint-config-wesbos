# ESLint + Prettier

## Prerequisites

- Node.js 14+
- npm 7+

The reason for npm 7+ being a prerequisite is that npm 7 installs peerDependencies automatically and we need plenty of peerDependencies.

### Installation instructions (eslint-config-asjas)

Run this command in the folder that you want to enable ESLint or Prettier.

```sh
npm i -D eslint-config-asjas
```

## Configs

### ESLint Config

Create a file named `.eslintrc` in the root folder of the project. Then add one of the following configs.

#### JavaScript Config

```json
{
  "extends": ["eslint-config-asjas/javascript"],
  "rules": {}
}
```

#### TypeScript Config

```json
{
  "extends": ["eslint-config-asjas/typescript"],
  "parserOptions": {
    "tsconfigRootDir": ".",
    "project": "tsconfig.json"
  },
  "rules": {}
}
```

#### Node.js Config

```json
{
  "extends": ["eslint-config-asjas/node"],
  "rules": {}
}
```

#### Node.js TypeScript Config

```json
{
  "extends": ["eslint-config-asjas/node-typescript"],
  "parserOptions": {
    "tsconfigRootDir": ".",
    "project": "tsconfig.json"
  },
  "rules": {}
}
```

#### React Config

```json
{
  "extends": ["eslint-config-asjas/react"],
  "rules": {}
}
```

#### React TypeScript Config

```json
{
  "extends": ["eslint-config-asjas/react-typescript"],
  "parserOptions": {
    "tsconfigRootDir": ".",
    "project": "tsconfig.json"
  },
  "rules": {}
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
  ...require("eslint-config-asjas/prettier"),
};
```

## NPM Scripts

You can add the following NPM scripts to your `package.json` file to simplify the linting and formatting of your code.

In a mono-repo you might need to change `.gitignore` to `../.gitnore` to reference a valid Git ignore file.

```json
"scripts": {
  "build": "replace with your build command",
  "check-types": "tsc",
  "lint": "eslint --ignore-path .gitignore .",
  "lint:fix": "eslint --ignore-path .gitignore --fix .",
  "format": "prettier --ignore-path .gitignore --write",
  "check-format": "prettier --ignore-path .gitignore --list-different",
  "validate": "npm-run-all --parallel check-types check-format lint build"
}
```

## Husky and lint-staged

The packages `husky` and `lint-staged` are used to create pre-commit hooks to check our code.

### Installation instructions (Husky and lint-staged)

```sh
npm i -D npm-run-all husky lint-staged
```

#### Configuration (Husky and lint-staged)

Add these fields to your `package.json` file.

```json
"husky": {
  "hooks": {
    "pre-commit": "npm run check-types && lint-staged && npm run build"
  }
},
"lint-staged": {
  "*.+(js|ts|tsx)": [
    "eslint"
  ],
  "**/**/*.+(js|json|ts|tsx)": [
    "prettier --write",
    "git add"
  ]
},
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
