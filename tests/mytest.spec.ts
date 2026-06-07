import {test, expect} from '@playwright/test';
//fixture means a function that can be used to set up some state before running a test, and then clean up after the test is done. In this case, we are creating a fixture called "myFixture" that will return the string "Hello, World!" when it is used in a test. 

test("verify the page tile is displayed", async({page})=>

{
    await page.goto("https://demowebshop.tricentis.com/");
    let ptile=await page.title();
    console.log(`page title is ${ptile}`);
    await expect(page).toHaveTitle("Demo Web Shop");
})
