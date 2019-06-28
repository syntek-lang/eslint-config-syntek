# eslint-config-syntek
<a href="https://travis-ci.com/syntek-lang/eslint-config-syntek"><img src="https://img.shields.io/travis/com/syntek-lang/eslint-config-syntek.svg?style=for-the-badge" alt="Build" /></a>
<a href="https://www.npmjs.com/package/@syntek/eslint-config-syntek"><img src="https://img.shields.io/github/package-json/v/syntek-lang/eslint-config-syntek.svg?colorB=red&style=for-the-badge" alt="Build" /></a>

## Dependencies
You can view all the peer dependencies you can install using the following command:
```sh
npm info @syntek/eslint-config-syntek@latest peerDependencies
```

You can install the required peer dependencies with the following command:
```sh
npx @syntek/eslint-config-syntek default
```

## Configs
This repository contains multiple ESLint configurations.

### Base
`@syntek/syntek` for the base JavaScript rules.

ESLint config:
```js
module.exports = {
  extends: '@syntek/syntek',
};
```

Or for the browser

```js
module.exports = {
  extends: '@syntek/syntek',
  env: {
    browser: true,
  },
};
```

### Node
`@syntek/syntek/node` for JavaScript with node.

ESLint config:
```js
module.exports = {
  extends: '@syntek/syntek/node',
};
```

### TypeScript
`@syntek/syntek/typescript` for TypeScript.

Additional required peer dependencies:
```sh
npx @syntek/eslint-config-syntek typescript
```

ESLint config:
```js
module.exports = {
  extends: '@syntek/syntek/typescript',
};
```

### Vue
`@syntek/syntek/vue` for Vue.

Additional required peer dependencies:
```sh
npx @syntek/eslint-config-syntek vue
```

ESLint config:
```js
module.exports = {
  extends: '@syntek/syntek/vue',
};
```

### Markdown
`@syntek/syntek/markdown` for Markdown.

Additional required peer dependencies:
```sh
npx @syntek/eslint-config-syntek markdown
```

ESLint config:
```js
module.exports = {
  extends: [
    '@syntek/syntek', // or a different configuration
    '@syntek/syntek/markdown',
  ],
};
```