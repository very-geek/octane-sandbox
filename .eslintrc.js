'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { legacyDecorators: true },
  },
  plugins: ['ember', 'qunit', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:qunit/recommended',
    'plugin:prettier/recommended',
  ],
  env: { browser: true },
  rules: {
    'ember/no-jquery': 'off',
    'no-console': 'error',
    'no-unused-vars': [
      'error',
      { args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint', 'ember', 'qunit', 'prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:ember/recommended',
        'plugin:qunit/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],
    },
    {
      files: ['app/router.ts'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      files: ['types/**/index.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
    {
      files: [
        'app/config/environment.d.ts',
        'types/ember-data/types/registries/model.d.ts',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: [
        './.ember-cli.js',
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './index.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
        './tests/dummy/config/**/*.js',
        './tests-/**/*.js',
      ],
      plugins: ['node'],
      extends: ['eslint:recommended', 'plugin:node/recommended'],
      env: { node: true },
      rules: {
        'node/no-extraneous-require': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
