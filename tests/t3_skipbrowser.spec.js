import {test, expect, chromium} from "@playwright/test"


test("Keyboard Actions",{tag:'@regression'}, async ({page, browserName})=>{
    //test.skip(browserName === 'firefox', 'Still working on it');
    //test.skip(browserName === "chromium", "test only skip for chromium")
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByPlaceholder("Enter Name").click();
    await page.keyboard.press("Tab");
    await page.keyboard.type("Hello");
    //await page.selectOption({value:})
    await page.getByRole("row", {name:"Smartwatch"}).getByRole("checkbox").click()
    expect(page.getByRole("row", {name:"Smartwatch"}).getByRole("checkbox")).toBeChecked()
    await page.waitForTimeout(3000);
})


test("Keyboard Actions2", {tag:'@smoke',} ,async ({page, browserName})=>{
    //test.skip(browserName === 'firefox', 'Still working on it');
    //test.skip(browserName === "chromium", "test only skip for chromium")
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByPlaceholder("Enter Name").click();
    await page.keyboard.press("Tab");
    await page.keyboard.type("Hello");
    //await page.selectOption({value:})
    await page.getByRole("row", {name:"Smartwatch"}).getByRole("checkbox").click()
    expect(page.getByRole("row", {name:"Smartwatch"}).getByRole("checkbox")).toBeChecked()
    await page.waitForTimeout(3000);
})

