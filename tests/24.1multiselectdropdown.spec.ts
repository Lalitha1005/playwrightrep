import {test,Locator,expect} from "@playwright/test"

test("verify user is able to select multiple options from the drodown" , async ({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#colors").selectOption(['Blue','Yellow','White']);
    //await page.locator("#colors").selectOption([{value:'red'},{value:'blue'}]);
    await page.locator("#colors").selectOption([{label:'Green'},{label:'Yellow'}]);
    await expect(page.locator("#colors")).toHaveValues(['Green','Yellow']);
    //await page.locator("#colors").selectOption([{index:1},{index:3}]);

     const colodrop:Locator=page.locator("#colors>option");
     expect(colodrop).toHaveCount(7);
     const colorop:String[]=(await colodrop.allTextContents()).map(ele =>ele.trim());
     console.log("colors list is: ",colorop);

    
     expect(colorop).toContain("Green");

   // await page.waitForTimeout(3000);
})