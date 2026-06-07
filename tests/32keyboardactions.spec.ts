import {test,Locator,expect} from "@playwright/test"

test("verify the keyboard actions" , async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    page.goto("https://testautomationpractice.blogspot.com/")
    const input1= page.locator("#input1")
    const input2=page.locator("#input2")
    const input3=page.locator("#input3")
    await input1.focus();
    const expect1='Vindhya LalithaVarshini'
    await page.keyboard.insertText(expect1)

    // await page.keyboard.down('Control')
    // await page.keyboard.press('A')
    // await page.keyboard.up('Control')
    await page.keyboard.press('Control+A')

    // await page.keyboard.down('Control')
    // await page.keyboard.press('C')
    // await page.keyboard.up('Control')
await page.keyboard.press('Control+C')

    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // await page.keyboard.down('Control')
    // await page.keyboard.press('v')
    // await page.keyboard.up('Control')
    await page.keyboard.press('Control+V')
   
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // await page.keyboard.down('Control')
    // await page.keyboard.press('v')
    // await page.keyboard.up('Control')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(5000);
   await expect(input2).toHaveValue(expect1)
    await expect(input3).toHaveValue(expect1)


})