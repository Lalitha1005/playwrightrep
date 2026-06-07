import {test,expect,Locator} from "@playwright/test"


 test("veirfy the check boxes are cehcked", async ({page})=>
 {
  /*   //hard assertios
    await page.goto("https://demowebshop.tricentis.com/"); 
    await expect(page).toHaveTitle("Demo Web Shop")
    const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    expect(logo).toBeVisible(); */
    //soft assertios
    await page.goto("https://demowebshop.tricentis.com/"); 
    await expect.soft(page).toHaveTitle("Demo Web Shop 3")
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/")
    const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    expect.soft(logo).toBeVisible();
 

 });

