import {test, expect} from "@playwright/test"


test.describe("firstGroup", ()=>{

    test("one",async ({page})=>{
        await page.goto("https://www.saucedemo.com/");
        const title = await page.title();
        expect(title).toBe("Swag Labs");
        await page.getByPlaceholder("Username").fill("standard_user");
        await page.getByPlaceholder("Password").fill("secret_sauce");
        await page.getByRole("button", {text:"Login"}).click();
        const elements = await page.$$("(//div[@class='inventory_item_label'])");
        console.log(elements);
        // for(let item of elements){
        //     console.log(item.textContent())
        // }
        // await page.waitForTimeout(3000);
    })

})