const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, 'index.js'),
    'plugin:vue/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // Enable rules in <template>
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/camelcase': ['error', { properties: 'never' }],
    'vue/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],
    'vue/no-empty-pattern': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // Vue specific
    'vue/component-name-in-template-casing': 'error',
    'vue/match-component-file-name': ['error', {
      extensions: ['jsx'],
      shouldMatchCase: true,
    }],
    'vue/no-boolean-default': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/require-direct-export': 'error',
    'vue/v-on-function-call': 'error',
    'vue/valid-v-slot': 'error',
  },
};
