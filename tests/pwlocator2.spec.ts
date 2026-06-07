import {test,expect,Locator} from "@playwright/test";

test("verify labels are displayed",async ({page})=>
{
    await page.goto("file:///D:/VS%20code%20python%20files/playwright_resourse_docs/app.html");
    const label1:Locator=await page.getByLabel("Username:");
    await label1.fill("admin");
    const label2:Locator=page.getByRole("heading", { name: "navigation" });
    const navhome= page.getByRole("navigation").getByRole("link", { name: "Home" });
    await page.getByLabel("Your Age:").fill("43");
    await page.getByLabel("Password:").fill("naren");
    await page.getByLabel("Standard").click();
    //await navhome.isVisible();
    //await navhome.click();

   // await expect(page.getByText("Locate elements by ").isVisible());
    await expect(page.getByText("getByRole()")).toBeVisible();
    await expect(page.getByText("getByRole()")).toHaveText("getByRole()");
    await expect(page.getByText("Locate elements by their explicit or implicit ARIA roles.")).toBeVisible();
    console.log(`lable1 is visible ${await expect(label1).toBeVisible()}`);
    console.log(`lable2 is visible ${await expect(label2).toBeVisible()}`);
    await page.getByRole("button",{name:"Toggle Button"}).click();
    await page.getByRole("button", {name:"Primary Action"}).click();
    page.getByRole("link",{name: "link"})
   await page.getByPlaceholder("Enter your full name").fill("John Doe");
   await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("9949924187");
   await page.getByPlaceholder("Search products...").fill("vindhya");
   await page.getByAltText("logo image").click();
    const homepageLink=await page.getByTitle("Home page link");
    await homepageLink.click();    
    await expect(page.getByText("This paragraph contains some ")).toBeVisible();
    
})
/*   test("verify the welcome message is displayed",async ({page}) =>

{   
    await page.goto("https://demo.nopcommerce.com/");
    // console.log(`welcome message is displayed ${await page.
    //     getByText("Welcome to our store").isVisible()}`);
     await expect( page.getByText("Welcome To Our Store").isVisible()); // using regular expression to ignore case sensitivity
        


    }) */