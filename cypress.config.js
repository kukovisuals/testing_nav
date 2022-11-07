const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    // viewportWidth: 375,
    // viewportHeight: 667,
    viewportWidth: 1024,
    viewportHeight: 640,
    baseUrl: 'https://ua4zxmhry56sxqf4-31340625964.shopifypreview.com/',

  },
});
