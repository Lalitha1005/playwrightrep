import {test,expect,Locator} from "@playwright/test"

test("verify the dynamic elements" ,async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    

    for(let i=1;i<5;i++)
    {
        //const dv:Locator=page.locator("button[class='start'] ,button[class='stop']"); // css
        const dv:Locator=page.locator("//button[@class='start' or @class='stop']"); //using xpath

        //expect(dv).toBeVisible;

       await dv.click();  
 
       await page.waitForTimeout(2000);
    }


})