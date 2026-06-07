import {test,expect,Locator} from "@playwright/test";

//getByAltText() method is used to locate an element by its alt text attribute. 
// It is commonly used to locate images or other elements that have an 
// alt attribute for accessibility purposes.
test("verify the logo is displayed", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const logo:Locator=  page.getByAltText("Tricentis Demo Web Shop");
    await expect(logo).toBeVisible();
    console.log(`logo is displayed ${logo}`); 
   console.log(expect (await  page.getByText(/Welcome To Our Store/i).isVisible()));
    //console.log(await expect(page.getByRole("heading", {name:"Register"})).toBeVisible());
    await page.getByRole("link", {name:"Register"}).click();
   

})
//getBytext() method is used to locate an element by its text content. 
// It is commonly used to locate elements such as buttons, links, or any 
// other element that contains visible text.
     test("verify the welcome message is displayed",async ({page}) =>

{   
    await page.goto("https://demo.nopcommerce.com/");
    console.log(`welcome message is displayed ${await page.
       // getByText("Welcome to our store").isVisible()}`);
       getByText(/Welcome To Our Store/i).isVisible()}`); // using regular expression to ignore case sensitivity
        

    })

//getByRole() method is used to locate an element by its ARIA role. 
// It is commonly used to locate elements that have specific roles defined 
// for accessibility purposes, such as buttons, links, headings, etc.

/* test("verify the register link is displayed", async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/");
     //page.getByRole("link", {name:"Register"}).click;
        console.log(`register link ${await expect(page.getByRole("link", {name:"Register"})).toBeVisible()}`);
    //console.log(`register link is displayed ${await page.getByRole("link", {name:"Register"}).isVisible()}`);
}) */


