import {test,Locator,expect} from "@playwright/test"

test("verify user is able to select multiple options from the drodown" , async ({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#colors").selectOption(['Blue','Yellow','White']);
    //await page.locator("#colors").selectOption([{value:'blue'},{value:'red'}]);
    //await page.locator("#colors").selectOption([{label:'Green'},{label:'White'}]);
    //await page.locator("#colors").selectOption([{index:1},{index:3}]);
     const colodrop:Locator=page.locator("#animals>option");
    //const colodrop:Locator=page.locator("#colors>option");   // to fail the sorted list run this
     
     const colorop:String[]=(await colodrop.allTextContents()).map(ele =>ele.trim());
     console.log("colors list is: ",colorop);

     const originallist=[...colorop]; //[...] is called as spread operator it will not change the original array while sorting
     const expectedlist=[...colorop].sort();
     console.log("original list:",originallist);
     console.log("expected list :",expectedlist);

     expect(originallist).toEqual(expectedlist);


    
     

    await page.waitForTimeout(3000);
});