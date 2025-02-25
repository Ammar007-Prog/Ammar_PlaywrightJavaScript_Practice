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
});