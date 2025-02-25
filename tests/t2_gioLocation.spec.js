import {test, expect, chromium} from "@playwright/test"

test.use({
    geolocation: { longitude: 41.890221, latitude: 12.492348 },
    permissions: ['geolocation'],
  });


test("gioLocation", async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    //const context = await browser.newContext({ permissions: ["geolocation"] });
    const page1 = await context.newPage();
    //await context.setGeolocation({ latitude: 40.41, longitude: -3.7 });
    //await context.setGeolocation({ latitude: 34.6723, longitude: -135.4848 });
    await page1.goto("https://practice.expandtesting.com/geolocation");
    await page1.locator("#geoBtn").click({timeout:2000});
    await page1.locator("//a[normalize-space()='See it on Google']").click()
    await page1.waitForTimeout(6000)
    
})

