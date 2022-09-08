import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    excludeSpecPattern: ["cypress/e2e/2-advanced-examples"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
