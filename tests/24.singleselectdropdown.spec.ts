import {test,expect,Locator} from "@playwright/test"

test ("verify single select drop down" ,async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#country").selectOption('India'); //visible text
    //await page.locator("#country").selectOption({value:'uk'}); //value
    // await page.locator("#country").selectOption({label:'India'}); //label
    await page.locator("#country").selectOption({index:3}); //index

    //await page.waitForTimeout(5000);

    const drop1:Locator=page.locator("#country>option");
    await expect(drop1).toHaveCount(10);
    const options1=(await drop1.allTextContents()).map(ele => ele.trim());
    console.log(options1);
    expect(options1).toContain("India");



});
