const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 375,
    viewportHeight: 667,
    baseUrl: 'https://05s0rnc12o8nxd5f-31340625964.shopifypreview.com',
  },
});
