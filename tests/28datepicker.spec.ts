import {test,Locator,expect, Page} from "@playwright/test"


async function selectdate(targetyear:string,targetmonth:string,targetdate:string,page:Page,isfuture:boolean)
{
while(true)
     {
     const currentmonth=await page.locator(".ui-datepicker-month").innerText();
     const currentyear=await page.locator(".ui-datepicker-year").innerText();

     if(currentmonth===targetmonth && currentyear===targetyear)
          {
               break;
          }
     // feature date
     if(isfuture)
     {
          await page.locator(".ui-datepicker-next").click(); 
     }     
     //past
     else
     {
     await page.locator(".ui-datepicker-prev").click();  
     }
     let found=false;
     const alldays=await page.locator(".ui-datepicker-calendar td").all();
     for(let day of alldays)
     {
         const sday= await day.innerText();
         if(sday.trim()===targetdate)
         {
          console.log("sday is :",sday)
          found=true;
          await day.click();
          break
         }
       
     }
      expect(found).toBeTruthy();
}
}
test("verify user is able to select the date" , async ({page})=>

{
     await page.goto("https://testautomationpractice.blogspot.com/");
     const dateinput=await page.locator("#datepicker");
     expect(dateinput).toBeVisible();
     //await dateinput.fill('05/10/2021'); approach one
    
// approach 2
 await dateinput.click();
const year='2026';
const month='June';
const date='27';
selectdate(year,month,date,page,true);
const expecteddate='06/27/2026'
await expect(dateinput).toHaveValue(expecteddate);
}
);