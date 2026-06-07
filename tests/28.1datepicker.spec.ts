import {test,Locator,expect, Page} from "@playwright/test"


async function selectdate1(targetyear:string,targetmonth:string,targetdate:string,page:Page,isfuture:boolean)
{
while(true)
     {
     const currentmonth=await page.locator(".ui-datepicker-month").selectOption(targetmonth);
          
     const currentyear=await page.locator(".ui-datepicker-year").selectOption(targetyear);
      
     const month1=currentmonth.toString();
     const year1=currentyear.toString();

     if(month1===targetmonth && year1===targetyear)
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
test("verify user is able to select the month year from the dropdown" , async ({page})=>

{
     await page.goto("https://testautomationpractice.blogspot.com/");
     const dateinput=await page.locator("#txtDate");
     expect(dateinput).toBeVisible();
     //await dateinput.fill('05/10/2021'); approach one
    
// approach 2
 await dateinput.click();
const year='2027';
const month='May';
const date='10';
//

const monthDropdown = page.locator(".ui-datepicker-month");
const yearDropdown = page.locator(".ui-datepicker-year");

// wait for dropdowns
await monthDropdown.waitFor({ state: 'visible' });
await yearDropdown.waitFor({ state: 'visible' });

// select values
await monthDropdown.selectOption({ label: month });
await yearDropdown.selectOption(year);
    await page.waitForTimeout(3000);
let found=false
const days=await page.locator(".ui-state-default").all();
for(let day of days)
{
    const sday= await day.innerText();
    if(sday===date)
    {
     console.log("sday is :",sday)
     found=true;
     await day.click();
     break
    }
}   
await page.waitForTimeout(2000);
const expdate='10/05/2027';
await expect(dateinput).toHaveValue(expdate);

});