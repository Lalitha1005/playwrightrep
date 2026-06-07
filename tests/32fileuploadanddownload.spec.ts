import {test,Locator,expect} from "@playwright/test"

test("verify single fileupload" , async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles('uploadfiles/test2.png')
    await page.locator("button:has-text('Upload Single File')").click();
    const msg=await page.locator("#singleFileStatus").innerText();
    console.log(msg);
    expect(msg).toContain("test2.png");
    await page.waitForTimeout(3000)

})


test("verify multiple fileupload" , async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#multipleFilesInput").setInputFiles(['uploadfiles/test2.png','uploadfiles/test1.txt'])
    await page.locator("button:has-text('Upload Multiple Files')").click();
    const msg=await page.locator("#multipleFilesStatus").innerText();
    console.log(msg);
    expect(msg).toContain("test1.txt");
    await page.waitForTimeout(3000)

})


test("verify multiple fileupload" , async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    
    await page.waitForTimeout(3000)

})