# graphql-eslint-bug-repro

For discussion: https://github.com/ardatan/graphql-tools/discussions/4944

## Setup

```
yarn
```

## Structure

- `.vscode` folders lists required extensions (ESLint), and settings to fix gql files on save.
- `gql` folder contains queries to lint (one valid, one invalid)
- `.eslintrc.js` enables linting for `gql` files
- `.graphqlrc.json` defines the config for `@graphql-eslint/eslint-plugin` to work (test API is https://api.tcgdex.net/v2/graphql)
- `package.json` lists the bare minimum dependencies needed for the reproduction, and a script to lint via CLI

## Reproduction

- Run `yarn lint` => `@graphql-eslint/eslint-plugin` works as expected.
- Open a `.gql` file, hit save => you get an error https://gyazo.com/4b6fd8a22768ae2cc8f378c4796c63d7 linking to `node_modules/@ardatan/sync-fetch/worker.js`
