module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8, // or 2017
  },
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'max-len': [2, {'code': 120, 'tabWidth': 4, 'ignoreUrls': true}],
  },
};
