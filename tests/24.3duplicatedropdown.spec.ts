import {test,Locator,expect} from "@playwright/test"

test("verify user is able to select multiple options from the drodown" , async ({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#colors").selectOption(['Blue','Yellow','White']);
    //await page.locator("#colors").selectOption([{value:'blue'},{value:'red'}]);
    //await page.locator("#colors").selectOption([{label:'Green'},{label:'White'}]);
    //await page.locator("#colors").selectOption([{index:1},{index:3}]);

     //const colodrop:Locator=page.locator("#colors>option"); // to check for duplicates use this
     const colodrop:Locator=page.locator("#animals>option"); 
     const colorop:string[]=(await colodrop.allTextContents()).map(ele =>ele.trim());
     const set1=new Set<string>();
     const duplicate1:string[]=[];

     for(const text of colorop)
     {
        if(set1.has(text))
        {
            duplicate1.push(text);
        }
        else
        {
            set1.add(text);
        }
     }
     console.log("the duplicate items are",duplicate1);
     expect(duplicate1.length).toBe(0);
     
});