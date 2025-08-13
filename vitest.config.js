/**
 * Module dependencies.
 */

const { defineConfig } = require('vitest/config');

/**
 * Export vitest config object.
 */

module.exports = defineConfig({
  test: {
    cache: false,
    coverage: {
      enabled: true,
      reporter: ['text']
    },
    globals: true,
    poolOptions: {
      forks: {
        singleFork: true
      }
    },
    restoreMocks: true
  }
});
