module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "env": {
    "browser": true
  },
  "overrides": [
    {
      "files": ["rollup.config.js", "web-test-runner.config.js"],
      "env": {
        "node": true
      }
    },
    {
      "files": [
        "*_test.ts",
        "**/custom_typings/*.ts",
        "packages/lit-ssr/src/test/integration/tests/**",
        "packages/lit-ssr/src/lib/util/parse5-utils.ts"
      ],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    "no-prototype-builtins": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ]
  }
};