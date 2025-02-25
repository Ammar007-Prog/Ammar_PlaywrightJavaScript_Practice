import {test, expect} from "@playwright/test"
const pageLogin = require("../Pages/loginPage").default;
const pageHome = require("../Pages/homePage").default;

test("loginApp", async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const loginPage1 =new pageLogin(page);
    await loginPage1.loginApplication();
   
    const newHomwpage = new pageHome(page)
    await newHomwpage.logOutAction()

    await page.waitForTimeout(3000)


})