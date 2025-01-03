import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory for test files
  timeout: 30 * 1000, // Maximum time a test can run
  expect: {
    timeout: 5000, // Timeout for assertions
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
  webServer: {
    command: 'npm start',
    port: 4200,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
