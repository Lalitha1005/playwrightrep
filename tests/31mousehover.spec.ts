import {test,expect,Locator, chromium} from "@playwright/test"

    test("verify mouse hover",async ({browser})=>
    {
    
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const pointme=page.locator(".dropbtn");
    await pointme.hover();
    // const mobile= page.locator(".dropdown-content a:nth-child(1)")
    // await mobile.hover()
    const laptop= page.locator(".dropdown-content a:nth-child(2)")
    await laptop.hover()
    await page.waitForTimeout(2000)
    });

   

     test("verify mouse rightclick",async ({browser})=>
    {
    
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto(" https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const rbutton=page.locator("span.context-menu-one")
    await rbutton.click({button:'right'});
    await page.waitForTimeout(5000)
    const edit=page.locator("li.context-menu-item span:has-text('Edit')");
     await expect(edit).toBeVisible();
     await edit.hover();
            page.on('dialog',(dialog)=>
{
    
    console.log("dialog type is:",dialog.type());
    expect(dialog.type()).toContain('alert');
    console.log("dialog text is :",dialog.message());
    expect(dialog.message()).toContain("clicked: edit")
    dialog.accept();
})
     await edit.click();

     await page.waitForTimeout(5000)
    });

     test("verify double click",async ({browser})=>
    {
    
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    const bclick=page.locator("button[ondblclick='myFunction1()']");
    await bclick.dblclick();
    const field2=page.locator("#field2");
    await expect(field2).toHaveValue("Hello World!");
    await page.waitForTimeout(3000)

    });

     test("verify drag and drop",async ({browser})=>
    {
    
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    const drag=page.locator("#draggable");
   
    const drop=page.locator("#droppable");
    await drag.dragTo(drop)
    
    await page.waitForTimeout(3000)

    });
     test.only("verify scrolling inside the dropdown ",async ({browser})=>
    {
    
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    const ddown= await page.locator("#comboBox").click();
    const inntext=page.locator("#dropdown div:nth-child(100)");
    await inntext.click()
    console.log("the inner text is :",await inntext.innerText())
    await page.waitForTimeout(3000)
    });