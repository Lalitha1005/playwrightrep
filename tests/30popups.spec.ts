import {test,expect,Locator, chromium} from "@playwright/test"

    test("verify the popups",async ({browser})=>
    {
    
    const context=await browser.newContext();
    const parentPage=await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/")
    expect(parentPage).toHaveTitle("Automation Testing Practice")
    expect(parentPage).toHaveURL("https://testautomationpractice.blogspot.com")
   await Promise.all([parentPage.waitForEvent('popup'),parentPage.locator("#PopUp").click()]);
await  parentPage.waitForTimeout(2000)
    const pages=context.pages()
    console.log("no of pages created",pages.length)
    console.log("page url of 1st page is :",await pages[0].url());
    console.log("page url of 1st page is :",await pages[1].url());
    console.log("page url of 1st page is :",await pages[2].url());
   
    console.log("page title of 1st page is :",await pages[0].title());
    console.log("page title of 1st page is :",await pages[1].title());
    console.log("page title of 1st page is :",await pages[2].title());
    
});
