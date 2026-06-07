import {test,Locator,expect} from '@playwright/test'

const searchItems:string[]=['laptop','gift','computer','monitor']
/* for(const item of searchItems)
{
test(`search for this ${item}`, async ({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("#small-searchterms").fill(item)
    await page.waitForTimeout(3000)
    await page.locator("input[value='Search']").click();
    
   await expect(page.locator("h2 a").nth(0)).toContainText(item,{ignoreCase:true})

})}; */
//using for each
searchItems.forEach((item) =>
    {
        test(`search for this ${item}`, async ({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("#small-searchterms").fill(item)
    await page.waitForTimeout(3000)
    await page.locator("input[value='Search']").click();
    
   await expect(page.locator("h2 a").nth(0)).toContainText(item,{ignoreCase:true})

})});

//using describe
searchItems.forEach((item) =>
    {
test.describe("Search items", async() =>
{
           test(`search for this ${item}`, async ({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("#small-searchterms").fill(item)
    await page.waitForTimeout(3000)
    await page.locator("input[value='Search']").click();
    
   await expect(page.locator("h2 a").nth(0)).toContainText(item,{ignoreCase:true})

}) 
})})
