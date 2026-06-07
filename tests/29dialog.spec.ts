import {test,expect,Locator} from "@playwright/test"

test ("verify simple dialog box" ,async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

   //register dialog handler
   page.on('dialog',(dialog)=>
{
    
    console.log("dialog type is:",dialog.type());
    expect(dialog.type()).toContain('alert');
    console.log("dialog text is :",dialog.message());
    expect(dialog.message()).toContain("I am an alert box!")
    dialog.accept();
    
})
   await page.locator("#alertBtn").click();

});
test.only ("verify confirmation dialog box" ,async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

   //register dialog handler
   page.on('dialog',(dialog)=>
{
    
    console.log("dialog type is:",dialog.type());
    expect(dialog.type()).toContain('confirm');
    console.log("dialog text is :",dialog.message());
    expect(dialog.message()).toContain("Press a button")
    //dialog.accept(); // will click ok on the dialog box
    dialog.dismiss();// will click cancel on the dialog box
    
    
})
   await page.locator("#confirmBtn").click();
   const text=await page.locator("#demo").innerText()
   console.log("output message is ",text)
   await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
});