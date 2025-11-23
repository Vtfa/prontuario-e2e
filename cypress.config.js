const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://prontuario-front.onrender.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
