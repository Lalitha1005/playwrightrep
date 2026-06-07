import {test,expect,Locator} from "@playwright/test"

test("test1",{tag:'@sanity'},async ({page}) =>
{
    await page.goto("https://google.com")
    expect(page).toHaveTitle("Google")
})
test("test2",{tag:'@regression'},async ({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/")
    expect(page).toHaveTitle("Demo Web Shop")
    
})