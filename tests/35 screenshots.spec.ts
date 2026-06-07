import { test,expect,Locator } from "@playwright/test";

test("verfiy the screen shots",async ({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demowebshop.tricentis.com/")
    const timeStamp=Date.now();
    await page.screenshot({path:'screenshots/homepage.png'});
    await page.screenshot({path:'screenshots/'+'homepage'+timeStamp+'.png',fullPage:true});
    await page.locator(".product-grid.home-page-product-grid").screenshot({path:'screenshots/'+'laptops_grid'+timeStamp+'.png'})
    const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    await logo.screenshot({path:'screenshots/'+'logoimage'+timeStamp+'.png'});
})