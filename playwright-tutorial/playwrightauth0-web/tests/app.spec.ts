import { test, expect } from '@playwright/test';

test.describe('Angular App', () => {
  test('should load the app and display the title', async ({ page, context }) => {
    await page.goto('http://localhost:4200');
    const title = await page.textContent('h1'); // Adjust selector as per your app
    expect(title).toBe('Testing Playwright!');
  });
});