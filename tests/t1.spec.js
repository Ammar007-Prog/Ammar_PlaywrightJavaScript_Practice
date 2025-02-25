import {test, expect, chromium} from "@playwright/test"
import path from "path";
import { text } from "stream/consumers";

test.describe("Action_Branch", ()=>{

    test.skip("text_input",async ()=>{
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const atpPage = await context.newPage();

        await atpPage.goto("https://testautomationpractice.blogspot.com/");
        await context.tracing.start({screenshot: true, snapshot: true});
        let tittleP = await atpPage.title()
        expect(tittleP).toBe('Automation Testing Practice');
        expect(tittleP).toContain('Automation Testing Practice'); 
        await atpPage.getByPlaceholder("Enter Name").fill('test Name');
        // await atpPage.locator("//input[@id='datepicker']").fill('2020-02-01');
        // await atpPage.keyboard.press('Enter');
        await atpPage.locator('#country').selectOption({value : "france"});
        //upload files
        await atpPage.locator("//button [@type='submit']").getByText("Upload Single File").click();
        await expect(atpPage.locator("#singleFileStatus")).toContainText("No file selected.");

        await atpPage.locator('#singleFileInput')
        .setInputFiles(path.join("C:/Users/Jaladurgam Hussain/Downloads/", 'kk1.txt'));
        await atpPage.locator("//button [@type='submit']").getByText("Upload Single File").click();
        await expect(atpPage.locator("#singleFileStatus")).toContainText("Single file selected:");

        await atpPage.locator('#multipleFilesInput').setInputFiles(
            [path.join("C:/Users/Jaladurgam Hussain/Downloads/", 'kk1.txt'),
            path.join("C:/Users/Jaladurgam Hussain/Downloads/", 'kk2.txt')]
        );
        await atpPage.locator("//button [@type='submit']").getByText("Upload Multiple Files").click();
        await expect(atpPage.locator("#multipleFilesStatus")).toContainText("Multiple files selected");
        await context.tracing.stop({path:"test.zip"})
        await atpPage.screenshot({path:"./tests/resultT/sample4.png", fullPage: true});
        //await atpPage.waitForTimeout(3000);
    })


    test("Tableselect",{tag:'@smoke'}, async ({page})=>{
        //test.only(browserName === "chromium", 'run only on chromium')
        await page.goto("https://testautomationpractice.blogspot.com/");
        //const columnsA = page.locator("#productTable").locator('table tbody tr td')
        const columnsA = page.locator("#productTable").locator('tbody tr').filter({has :page.locator('td')}); //.filter({has :page.locator('td'), hasText: "Smartwatch"})
        await columnsA.filter({hasText:'Smartwatch'}).locator('input').check();
        await columnsA.filter({hasText:'Wireless Earbuds'}).locator('input').check();
        expect(columnsA.filter({hasText:'Wireless Earbuds'}).locator('input')).toBeChecked()
        expect(columnsA.filter({hasText:'Smartphone'}).locator('input')).not.toBeChecked()
        await page.waitForTimeout(3000);
    })

    test.skip("testmultiple tabs", async()=>{
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const atpPage = await context.newPage(); //page 1

        await atpPage.goto("https://testautomationpractice.blogspot.com/");
        let tittleP = await atpPage.title();
        expect(tittleP).toBe('Automation Testing Practice');
        const pageNew = context.waitForEvent('page'); 
        await atpPage.locator("(//button[normalize-space()='New Tab'])[1]").click();
        

        // page 2
        const demoPage = await pageNew 
        await expect(demoPage).toHaveTitle('Your Store')
        await demoPage.waitForTimeout(3000);
        
        // to switch particular page
        await atpPage.bringToFront(); 
        await atpPage.waitForTimeout(3000);

    })

    test("test_Aletrs", async()=>{
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const atpPage = await context.newPage(); //page 1

        await atpPage.goto("https://testautomationpractice.blogspot.com/");
        let tittleP = await atpPage.title();
        expect(tittleP).toBe('Automation Testing Practice');
       
        
        atpPage.on('dialog', dialog => dialog.accept());
        await atpPage.getByRole('button').getByText("Simple Alert").click();
        await atpPage.locator('#country').selectOption({value : "france"});
        await atpPage.waitForTimeout(3000);
    })

    test("Keyboard Actions", async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.getByPlaceholder("Enter Name").click();
        await page.keyboard.press("Tab");
        await page.keyboard.type("Hello");
        //await page.selectOption({value:})
        await page.getByRole("row", {name:"Smartwatch"}).getByRole("checkbox").click()
        expect(page.getByRole("row", {name:"Smartwatch"}).getByRole("checkbox")).toBeChecked()
        await page.waitForTimeout(3000);
    })
})