//css:case cading style shee

import{test,expect,Locator} from "@playwright/test";
test("verify that the search box is displaye or not:", async ({page})=>
{
    // css using id tag#id
    await page.goto("https://demowebshop.tricentis.com/");
 /*   
    await expect(page.getByAltText("Tricentis Demo Web Shop")).toBeVisible();
      await page.locator("input#small-searchterms").fill("vindhya");
   //await expect(page.getByText("Newsletter")).toHaveText("Newsletter");
   await page.locator("input#pollanswers-1").click();
  await page.getByRole("button",{name:"Vote"}).click(); */

  //tag class
  //      await page.locator("input.search-box-text").fill("Lalitha Varshini");

  // tag[atribute=value]
         //  await page.locator("input[name=q]").fill("hemalatha");
 // tag class and atribute

 page.locator("input.search-box-text[value='Search store']").fill("naren");


})