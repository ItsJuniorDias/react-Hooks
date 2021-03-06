module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
      "airbnb",
      "prettier",
      "prettier/react"

  ],
  plugins: ['prettier', 'react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures:{
      jsx:true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier" :"error",
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'no-param-reassign': 'off',
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],
    'import/prefer-default-export' : 'off"',
    'no-console' : ["error", {allow: ["tron"]}]

  },
};
