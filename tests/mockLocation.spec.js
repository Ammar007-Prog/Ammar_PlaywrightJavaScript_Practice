import {test, expect} from "@playwright/test"


test.describe("group", ()=>{

    test("test1", async({page})=>{
        await page.goto("https://google.com");
        await page.waitForTimeout(3000)
    })

})