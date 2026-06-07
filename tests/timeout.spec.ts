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
    const title=await page.title();
    console.log("the title of the page is:",title) 
    expect(page).toHaveTitle("Demo Web Shop")
    expect(page).toHaveURL("https://demowebshop.tricentis.com",{timeout:30000})
    await expect(page.locator("text='Welcome to our store'")).toBeVisible();
    await expect(page.locator("div[class='product-grid home-page-product-grid'] div[class='title']"))
    .toHaveText("Featured products");
    await page.locator(".search-box-text.ui-autocomplete-input").fill("laptop",{force:true});
    await page.locator("input[value='Search']").click({force:true})
    expect(title).not.toContain("Demo");
 

 });

