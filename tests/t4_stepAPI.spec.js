import {test, expect} from '@playwright/test'


test('test', async ({ page }) => {
    await test.step('Log in', async () => {
        // ...
        console.log("step1"=== "step1")
    });
    await test.step('news feed', async () => {
        // ...
        let a = 1
        let b = 1
        expect(a==b).toBe(true)
        console.log("step1")
    });

    await test.step('news feed2', async () => {
        // ...
        expect.soft(2==2).toBe(true)
        console.log("step2")
        
    });

    await test.step('news feed3', async () => {
        // ...
        console.log("step3")
    });

  });


  



