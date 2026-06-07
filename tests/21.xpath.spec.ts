import {test,expect,Locator} from "@playwright/test"

test("verify the xpath", async ({page})=>
{
  await page.goto("https://demowebshop.tricentis.com/");
  /* const logo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
  await expect(logo).toBeVisible();
  await expect(page.locator("//strong[@class='poll-display-text']")).toHaveText("Do you like nopCommerce?");
  await page.locator("//input[@id='vote-poll-1']").click();
  
  await  expect(page.locator("//strong[@class='poll-display-text']")).toBeVisible();
  await page.locator("//img[@alt='Picture of 14.1-inch Laptop' and @title='Show details for 14.1-inch Laptop']").click(); */

  await expect(page.locator("//strong[@class='poll-display-text']")).toHaveText("Do you like nopCommerce?");

  //2-contains 
   const productlist:Locator=page.locator("//h2/a[contains(@href,'computer')]");
   const productcount=await productlist.count();
   expect(productcount).toBeGreaterThan(0);
   console.log(`product count is: ${productcount}`);

   console.log("first product name is :", await productlist.first().textContent());
   console.log("last product name is :", await productlist.last().textContent());
   console.log("nth product name is :", await productlist.nth(1).textContent());
   let allpl:string[]=await productlist.allTextContents();
console.log("all product list is :",allpl)
   for(let pt of allpl)
   {
    console.log(pt);
   }
// 3-starts with
  const bproduct:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
  const bcount:number=await bproduct.count();
  expect(bcount).toBeGreaterThan(0);
  console.log("build items****************")
  console.log(await bproduct.allTextContents());

  //4. text()

   const reg:Locator= page.locator("//a[text()='Register']");
   await expect(reg).toBeVisible();
  await reg.click();

  //5. last()

   const litem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
   console.log("the last item is:", await litem.textContent());
   await expect(litem).toBeVisible();

   //6. position
   const positem:Locator=page.locator("//div[@class='column follow-us']//li[position()=2]");
   console.log("on the 2nd position the item is:",await positem.textContent());
  await positem.click();
})