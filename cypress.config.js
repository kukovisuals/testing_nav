const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 375,
    viewportHeight: 667,
    baseUrl: 'https://shop.join-eby.com/',

  },
});
