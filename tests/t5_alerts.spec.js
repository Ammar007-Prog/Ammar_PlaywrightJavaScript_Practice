import {test, expect} from '@playwright/test'

test.describe("Hello Team",{tag:"@testTAg"},async()=>{

    test("firstAlert",{tag: ["@oneTag","@secondTag"]},async({page, context})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const pageTittle = await page.title();
        expect(pageTittle).toBe("Automation Testing Practice");
        //page.on('dialog', dialog => dialog.accept());

        // page.on('dialog', dialog => {
        //     console.log(dialog.message());
        //     dialog.accept();
        // })

        page.on('dialog', dialog => {
            expect(dialog.message()).toBe("I am an alert box!");
            dialog.accept();
        })

        await page.locator('#alertBtn').click();
        //await page.fill("(//textarea[@id='textarea'])[1]", "1234")
        await page.waitForTimeout(4000)

    })

    test("confirmAlert",{tag: ["@threeTag","@secondTag"]},async({page, context})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const pageTittle = await page.title();
        expect(pageTittle).toBe("Automation Testing Practice");
        //page.on('dialog', dialog => dialog.accept());

        // page.on('dialog', dialog => {
        //     console.log(dialog.message());
        //     dialog.accept();
        // })

        page.on('dialog', dialog => {
            expect(dialog.message()).toBe("Press a button!");
            console.log(dialog.message())
            //dialog.accept();
            dialog.dismiss()
        })

        await page.locator('#confirmBtn').click();
        await page.fill("(//textarea[@id='textarea'])[1]", "1234")
        await page.waitForTimeout(4000)

    })


    test("promptAlert",{tag: ["@threeTag","@secondTag"]},async({page, context})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const pageTittle = await page.title();
        expect(pageTittle).toBe("Automation Testing Practice");
    

        page.on('dialog', dialog => {
            //expect(dialog.message()).toBe("Press a button!");
            console.log(dialog.message())
            dialog.type("hello");
            dialog.accept();
            
            //dialog.dismiss()
        })

        await page.locator('#promptBtn').click();
        await page.fill("(//textarea[@id='textarea'])[1]", "1234")
        await page.waitForTimeout(4000)

    })

    test("testTimeOut", async({page})=>{
        await page.goto("https://wet-boew.github.io/v4.0-ci/demos/session-timeout/session-timeout-en.html")
        await page.clock.fastForward('30:00');
        await page.waitForTimeout(4000)
    })

})