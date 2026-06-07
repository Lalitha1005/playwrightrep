import {test,expect,Locator} from "@playwright/test"

test("verify the xpath Axis", async ({page})=>
{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    
/* 
    //1.self
    const selloc:Locator=page.locator("//td[text()='Germany']/self::td");
    await expect(selloc).toBeVisible();
    await expect (selloc).toHaveText("Germany");

    //2.Parent

    const parlot:Locator=page.locator("//td[text()='Germany']/parent::tr");
    await expect(parlot).toContainText("Maria Anders");
    //3.Child 
    const chilloc:Locator=page.locator("//table[@id='customers']//tr[2]/child::td");
          
    await expect(chilloc).toHaveCount(3); */

    //4.ancestor
    const ansloc:Locator=page.locator("//td[text()='Germany']/ancestor::table");
    await expect(ansloc).toHaveAttribute('id',"customers");
    //await expect(ansloc).toHaveText('Country');
    await page.waitForTimeout(2000);
    console.log(await ansloc.allTextContents());    
//5. decendents
//6 .following
    const follloc:Locator=page.locator("//td[text()='Germany']/following::td[1]");
    expect(follloc).toHaveText("Centro comercial Moctezuma");

   // 7.preceding

    const preloc:Locator=page.locator("//td[text()='Germany']/preceding::td[1]");
    await expect(preloc).toHaveCount(1);
    await expect(preloc).toHaveText("Maria Anders");
})