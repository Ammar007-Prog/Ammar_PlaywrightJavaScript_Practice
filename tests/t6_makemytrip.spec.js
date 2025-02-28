import {test, expect, chromium} from '@playwright/test'


test.fixme("makemytrip", async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.makemytrip.com/");
    //await page.screenshot({path:"tests/resultT/testSc.png", fullPage: true});
    await page.locator("//span[@data-cy='closeModal']").click()
    //await page.waitForLoadState()
    //const testAreaScreenshot = await page.getByRole('navigation').screenshot({path : "test3.png"})
    //await expect(page).toHaveScreenshot("D:/TestProject/tests/t6_makemytrip.spec.js-snapshots/test2-chromium-win32.png")
    //await page.getByRole('navigation').screenshot({path : "test2.png"})
    await page.waitForTimeout(3000);
})

// test('test', async ({ page }) => {
//   await page.goto('https://www.makemytrip.com/');
//   await page.locator('section').filter({ hasText: 'Personal AccountMyBiz Account' }).locator('span').first().click();
//   await Promise.all([
//     expect(page.getByRole('navigation')).toMatchAriaSnapshot(`
//       - list:
//         - listitem:
//           - link "Flights"
//         - listitem:
//           - link "Hotels"
//         - listitem:
//           - link "Homestays & Villas"
//         - listitem:
//           - link "Holiday Packages"
//         - listitem:
//           - link "Trains"
//         - listitem:
//           - link "Buses"
//         - listitem:
//           - link "Cabs"
//         - listitem:
//           - link "Forex Card & Currency"
//         - listitem:
//           - link "Travel Insurance"
//     `),
//     expect(page.locator('#top-banner')).toMatchAriaSnapshot(`
//       - list:
//         - listitem:
//           - img "Where2Go_image"
//           - paragraph: Where2Go
//         - listitem:
//           - img "How2Go_image"
//           - paragraph: How2Go new
//           - text: Find routes to anywhere
//         - listitem:
//           - img "<span class='latoBold blackText font14'>MakeMyTrip ICICI Credit Card</span>_image"
//           - paragraph: MakeMyTrip ICICI Credit Card
//           - text: Never-expiring rewards & big benefits
//         - listitem:
//           - img "MICE_image"
//           - paragraph: MICE
//           - text: Offsites, Events & Meetings
//         - listitem:
//           - img "Gift Cards_image"
//           - paragraph: Gift Cards
//     `)
//   ]);


// });