// @ts-check
const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true, // Run tests in parallel
  forbidOnly: !!process.env.CI, // Fail on accidental .only in CI
  retries: process.env.CI ? 2 : 0, // Retry on CI only
  workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI
  reporter: "html", // Reporter format
  use: {
    baseURL: "http://localhost:5500", // Base URL for all actions
    trace: "on-first-retry", // Collect trace when retrying failed tests
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  webServer: {
    command: "npm run start", // Command to run the server
    url: "http://localhost:5500", // URL to test against
    reuseExistingServer: !process.env.CI, // Reuse the server in CI
  },
});
