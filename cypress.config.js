const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    // viewportWidth: 375,
    // viewportHeight: 667,
    viewportWidth: 1309,
    viewportHeight: 726,
    baseUrl: 'https://eby-by-sofia-vergara.myshopify.com/',

  },
});
