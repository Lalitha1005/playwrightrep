import {test,expect,Locator} from "@playwright/test"

/* test("verify the details" ,async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    const gtloc:Locator=page.getByText("Facebook");
    await expect(gtloc).toHaveText("Facebook");
    await expect(page.getByAltText("Picture of Simple Computer")).toBeVisible();
    await page.locator("//input[@id='small-searchterms']").fill("Vindhya");
    await page.getByRole("button",{name:'Search'}).click();
}); */

 test("veirfy the check boxes are cehcked", async ({page})=>
 {
    await page.goto("https://demowebshop.tricentis.com/");  
    expect(page).toHaveTitle("Automation Testing Practice")
    expect(page).toHaveURL("https://testautomationpractice.blogspot.com",{timeout:30000})
    page.locator(".search-box-text.ui-autocomplete-input").fill("laptop",{force:true});
    page.locator("input[value='Search']").click({force:true})

 });

