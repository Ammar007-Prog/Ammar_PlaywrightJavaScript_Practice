import {test, expect} from "@playwright/test";
const fs = require('fs').promises



test.describe("firstGroup", ()=>{
    //test.describe.configure({ mode: 'serial' });

    test("one_read_JSON", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        const title = await page.title();
        expect(title).toBe("Swag Labs");
        
        // Read JSON file asynchronously using fs.promises.readFile
        const data = JSON.parse(await fs.readFile('./tests-examples/example2.json', 'utf8'));
        
        const data2 = JSON.parse(await fs.readFile("./tests-examples/example2.json", 'utf8'))
        console.log(data);
        console.log(data2)

        await page.getByPlaceholder("Username").fill(data.username);
        await page.getByPlaceholder("Password").fill(data.password);
        await page.getByRole("button", {text:"Login"}).click();

        await page.waitForTimeout(3000)
    });

    test("two_nested_iframe",async ({page})=>{
        await page.goto('https://ui.vision/demo/webtest/frames/');

        //frame
        const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
        await frame3.locator("//input[@name='mytext3']").fill("test")

        //innerFrame
        const childFr = await frame3.childFrames()
        await childFr[0].locator("//*[@id='i6']/div[3]/div").click()

        await page.waitForTimeout(3000)

    })

    // test("three",async ({page})=>{
    //     await page.goto("https://www.saucedemo.com/");
    //     const title = await page.title();
    //     expect(title).toBe("Swag Labs");
    // })

    // test("Secondfive",async ({page})=>{
    //     await page.goto("https://www.saucedemo.com/");
    //     const title = await page.title();
    //     expect(title).toBe("Swag Labs");
    // })

    // test("four",async ({page})=>{
    //     await page.goto("https://www.saucedemo.com/");
    //     const title = await page.title();
    //     expect(title).toBe("Swag Labs");
    // })



})



test.describe("SecondGroup", ()=>{

    test("Secondoneone",async ({page})=>{
        await page.goto("https://www.qaclickacademy.com/");
        const title = await page.title();
        expect(title).toBe("QAClick Academy - A Testing Academy to Learn, Earn and Shine");
    })

    // test("Secondone",async ({page})=>{
    //     await page.goto("https://www.saucedemo.com/");
    //     const title = await page.title();
    //     expect(title).toBe("Swag Labs");
    // })

    // test("Secondtwo",async ({page})=>{
    //     await page.goto("https://www.saucedemo.com/");
    //     const title = await page.title();
    //     expect(title).toBe("Swag Labs");
    // })

    // test("Secondthree",async ({page})=>{
    //     await page.goto("https://www.saucedemo.com/");
    //     const title = await page.title();
    //     expect(title).toBe("Swag Labs");
    // })

    // test("Secondfour",async ({page})=>{
    //     await page.goto("https://www.saucedemo.com/");
    //     const title = await page.title();
    //     expect(title).toBe("Swag Labs");
    // })

})