import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'icpy8v',
  e2e: {
    redirectionLimit: 100,
    retries: 0,
    baseUrl : "https://qatest.datasub.com/quote.html#",
    experimentalStudio : true,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser: Cypress.Browser, launchOptions: any) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--max_old_space_size=4096');
        }
        return launchOptions;
      });
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    // viewportWidth: 1280,
    // viewportHeight: 720,
    // video: false,
    specPattern: "cypress/e2e" // Убедитесь, что ваш путь к тестам правильный
  }
  })
