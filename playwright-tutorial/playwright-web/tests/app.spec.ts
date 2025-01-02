import { test, expect } from '@playwright/test';

test.describe('Angular App', () => {
  test('should load the app and display the title & p', async ({ page }) => {
    await page.goto('http://localhost:4200');
    const title = await page.textContent('h1'); // Adjust selector as per your app
    expect(title).toBe('Welcome to my-angular-app!');
    const p = await page.textContent('p');
    expect(p).toBe('@dotnetist is the best dev in the universe!');
  });
});