import {test, expect} from "@playwright/test"
import { text } from "stream/consumers";




test.describe("firstGroup", ()=>{
    //test.describe.configure({ mode: 'serial' });

    test("alerts",async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        const title = await page.title();
        expect(title).toBe("Practice Page");

        // page.on('dialog', dialog => dialog.accept());
        // await page.locator('#alertbtn').click({timeout:3000});

        page.on('dialog', dialog=>{
            //expect(dialog.message()).toBe("Hello , share this practice page and share your knowledge")
            dialog.accept()
        })

        await page.locator('#alertbtn').click({timeout:3000});

        // await page.locator("//input[@value='Alert']").click
        // await page.waitForTimeout(3000)
        // await page.close()

        //await page.locator("#dropdown-class-example").click()
        await page.locator("#dropdown-class-example").selectOption({value:"option2"})
        
        page.on('dialog', dialog=>{
            expect(dialog.message()).toBe("Hello , Are you sure you want to confirm?")
            dialog.dismiss() 
        })
        
        await page.locator('#alertbtn').click({timeout:3000});

        await page.waitForTimeout(3000)

        await page.locator("#dropdown-class-example").selectOption({value:"option1"})

    })

    


})