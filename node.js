const path = require('path');

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  env: {
    browser: false,
    node: true,
    es6: true,
  },
};
