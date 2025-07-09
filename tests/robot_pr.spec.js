const { test, expect } = require('@playwright/test');
const xlsx = require('xlsx');

const workbook = xlsx.readFile('./TestData/employeeInfo.xlsx');
const sheet = workbook.Sheets['Sheet1'];
const data = xlsx.utils.sheet_to_json(sheet);

const url = 'https://sahayog.testingxperts.com/';

test.describe.configure({ mode: 'serial' });

data.forEach((row) => {
  test(`Validate info for ${row.empNumber}`, async ({ page }) => {
    // Open browser and navigate
    await page.goto(url);
    //await page.setViewportSize({ width: 1280, height: 800 });

    // Login
    await page.fill('#username', String(row.empId));
    await page.fill('#password', String(row.password));
    //await page.waitForTimeout(5000)
    await page.click('xpath=//*[@id="form-login"]/div/button');

    // Navigate to Edit Profile
    await page.click('#NjA4');
    await page.click('xpath=//div[contains(@class, "profileeditbutton")]//a[@href="/profile/edit"]');

    // Fill in profile fields
    await page.fill('#field4', String(row.AboutMe));
    await page.fill('#field56', String(row.AadharNumber));
    await page.fill('#field61', String(row.EmergencyContactPerson));
    await page.fill('#field62', String(row.Relation));

    // Optional wait to observe changes
    await page.waitForTimeout(3000);
  });
});
