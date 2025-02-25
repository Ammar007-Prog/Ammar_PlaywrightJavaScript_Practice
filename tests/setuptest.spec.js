import { test, expect } from '@playwright/test';
import { promises as fs } from 'fs';

test.describe('firstGroup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(title).toBe('Swag Labs');
    const data = JSON.parse(await fs.readFile('./tests-examples/example2.json', 'utf8'));
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);
    await page.getByRole('button', { text: 'Login' }).click();
  });

  test('test1', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  });

  test('test2', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.waitForTimeout(3000);
  });
});


const { chromium } = require('playwright');

// /=---------------


// (async () => {
//  // Launch browser
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Navigate to the main page
//   await page.goto('https://example.com');

//   // Trigger the pop-up (e.g., by clicking a button)
//   const [popup] = await Promise.all([
//     context.waitForEvent('page'), // Wait for the pop-up to open
//     page.click('button#open-popup') // Replace with the actual selector
//   ]);

//   // Wait for the pop-up to load
//   await popup.waitForLoadState();

//   // Fill in the input fields in the pop-up
//   await popup.fill('input[name="username"]', 'yourUsername');
//   await popup.fill('input[name="password"]', 'yourPassword');

//   // Submit the form in the pop-up
//   await popup.click('button[type="submit"]');

//   // Wait for navigation or any other action
//   await popup.waitForNavigation();

//   // Close browser
//   await browser.close();
// })();




test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-parallel');
  await expect(page.getByLabel('Main', { exact: true })).toMatchAriaSnapshot(`
    - link "GitHub repository"
    - link "Discord server"
    - button "Switch between dark and light mode (currently dark mode)" [pressed]:
      - img
    - button "Search (Ctrl+K)":
      - img
    `);
});