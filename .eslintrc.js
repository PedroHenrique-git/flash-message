module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-undef': 'off',
    'no-new': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'valid-typeof': 'off',
  },
};
