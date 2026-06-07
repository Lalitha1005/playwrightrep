import {test,expect,Locator, chromium} from "@playwright/test"

    test("verify handle tabs",async ()=>
    {
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const parentPage=await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/")
    const [childPage]=await Promise.all([context.waitForEvent('page'),parentPage.locator("button:has-text('New Tab')").click()]);

    const pages=context.pages()
    console.log("no of pages created",pages.length)
    console.log("parent title is",await pages[0].title())
    console.log("parent title is",await pages[1].title())
});
