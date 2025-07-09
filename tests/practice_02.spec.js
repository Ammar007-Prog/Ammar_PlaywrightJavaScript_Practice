import { test, expect, chromium } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Stay signed out' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('test search');

  await page.getByRole('link', { name: 'Go to Google Home' }).click();
  await page.getByRole('button', { name: 'Google apps' }).click();
  await page.locator('iframe[name="app"]').contentFrame().getByRole('link', { name: 'Search, row 1 of 5 and column' }).click();
});


test("test2", async ({page})=>{
    const browser = await chromium.launch();
    const context = await page.context();
    const newPage1 = await context.newPage();

    await newPage1.goto("https://testautomationpractice.blogspot.com/");
    const newPage = page.waitForEvent(page);
    await newPage1.locator("//button[text()='New Tab']").click();

    //second page
    const secondPage = await newPage
    await secondPage.location("(//input[@title='search'])[1]").fill("test search")
    await secondPage.waitForTimeout(5000);


    await page.bringToFront(newPage1);
    await newPage1.locator("//button[text()='Confirmation Alert']").click();
    newPage1.on("dialog", dialog=>{
        expect(dialog.message()).toBe("Press a button!");
        //dialog.accept()
        dialog.dismiss();

    });
    await newPage1.waitForTimeout(3000);

});


//import { test, expect, chromium } from '@playwright/test';

test('test22', async ({ page }) => {
  //const browser = await chromium.launch();
  //const context = await browser.newContext();
  const context = page.context();
  const newPage1 = await context.newPage();

  await newPage1.goto('https://testautomationpractice.blogspot.com/');

  // Listen for new page event before clicking the button
  const [secondPage] = await Promise.all([
    context.waitForEvent('page'),
    newPage1.locator("//button[text()='New Tab']").click(),
  ]);

  await secondPage.waitForLoadState();
  await secondPage.locator("(//input[@title='search'])[1]").fill('test search');
  await secondPage.waitForTimeout(5000);

  await newPage1.bringToFront();
  newPage1.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Press a button!');
    await dialog.dismiss();
  });

  await newPage1.locator("//button[text()='Confirmation Alert']").click();
  await newPage1.waitForTimeout(3000);

  await browser.close();
});


test.only('test23', async ({ page }) => {
    
//   const context = page.context(); // Use existing context
//   const newPage1 = await context.newPage(); // Open a new tab in the same browser

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const newPage1 = await context.newPage(); //page 1

  await newPage1.goto('https://testautomationpractice.blogspot.com/');

  const [secondPage] = await Promise.all([
    context.waitForEvent('page'),
    newPage1.locator("//button[text()='New Tab']").click(),
  ]);

  await secondPage.waitForLoadState();
  await secondPage.locator("(//input[@title='search'])[1]").fill('test search');
  await secondPage.waitForTimeout(5000);

  await newPage1.bringToFront();
  newPage1.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Press a button!');
    await dialog.dismiss();
  });

  await newPage1.locator("//button[text()='Confirmation Alert']").click();
  await newPage1.waitForTimeout(3000);
});

