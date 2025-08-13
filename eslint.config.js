'use strict';

/**
 * Module dependencies.
 */

const { defineConfig, globalIgnores } = require('eslint/config');
const globals = require('globals');
const uphold = require('eslint-config-uphold');

/**
 * `ESLint` configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = defineConfig([
  {
    extends: [uphold],
    name: 'uphold-config',
    rules: {
      'id-match': 'off',
      'no-underscore-dangle': 'off',
      'prettier/prettier': 'off'
    }
  },
  {
    files: ['test/**', 'test-e2e/**'],
    languageOptions: {
      globals: globals.vitest
    },
    name: 'test-config'
  },
  globalIgnores(['bundles', 'bin/update-schema', 'config/local.js', 'coverage'])
]);
