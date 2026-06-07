import {test,Locator,expect} from "@playwright/test"

test("verify user is able to fetch values from the dynamic table" , async ({page})=>

{
     await page.goto("https://testautomationpractice.blogspot.com/");
     const dytable:Locator=page.locator("table[id='taskTable']");
     await expect(dytable).toBeVisible();
     const dyrow:Locator[]=await dytable.locator("tbody tr").all();
     let cpuload='';
      for(const cell of dyrow)
     {
            const processitem=await cell.locator('td').nth(0).innerText();
            if(processitem==='Chrome')
            {
               cpuload= await cell.locator('td:has-text("%")').innerText()
               console.log("chrome cpu load", cpuload);
            }
     }
     
      const chromeprocess=await page.locator(".chrome-cpu").innerText();
      console.log(chromeprocess)
      expect(cpuload).toContain(chromeprocess);

});