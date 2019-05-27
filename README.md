# eslint-config-syntek

> Syntek ESLint shareable config

# Dependencies
You can view the peer dependencies you can install using the following command:
```sh
npm info @syntek/eslint-config-syntek@latest peerDependencies
```

To automatically install the peer dependencies required by this config run the following command:
```sh
npx install-peerdeps --dev @syntek/eslint-config-syntek
```

# Configs
This repository contains multiple eslint configurations.

## Base
`@syntek/syntek` for the base JavaScript rules

```js
{
  extends: '@syntek/syntek',
}
```

Or for the browser

```js
{
  extends: '@syntek/syntek',
  env: {
    browser: true,
  },
}
```

## Node
`@syntek/syntek/node` for JavaScript with node

```js
{
  extends: '@syntek/syntek/node',
}
```

## TypeScript
`@syntek/syntek/typescript` for TypeScript

```js
{
  extends: '@syntek/syntek/typescript',
}
```
