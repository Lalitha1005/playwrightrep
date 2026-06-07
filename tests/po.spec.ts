import {test,expect,Locator} from "@playwright/test"
import{Loginpage}  from '../pages/Loginpage'

test("verfiy the produc flow" ,async ({page}) =>
{
   const loginpage=new Loginpage(page)
   await page.goto("https://demoblaze.com/index.html")
   
   /* await loginpage.clickOnLoginLink();
    await loginpage.enter_userName("pavanol")
    await loginpage.enter_pssword("test@123")
    await loginpage.clickOnLoginbutton(); */
    await loginpage.performLogin("pavanol","test@123");

})
