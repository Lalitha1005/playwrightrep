import {test,Locator,expect} from "@playwright/test"

test("verify user is able to select multiple options from the drodown" , async ({page})=>

{
     await page.goto("https://demowebshop.tricentis.com/");
     const produclist:Locator=page.locator(".product-title");
    //  await produclist.allTextContents();
    //  produclist.innerText();
    const cnt=await produclist.count();
    console.log("no of elements :",cnt);
//1. innerText textContent
        // console.log("all text:",await produclist.nth(1).textContent());
        // console.log("innertext:",await produclist.nth(1).innerText());
        for(let i=0;i<cnt;i++)
        {
        
            const product1=await produclist.nth(i).textContent();
            console.log(product1?.trim());
        
            // const productName=await produclist.nth(i).innerText();
            // console.log(productName)
        }
//2. allinterText allTextContents
        console.log("all textcontents")
        const product2=await produclist.allTextContents();
        const prodtrim:string[]=product2.map(text =>text.trim())
        console.log("allTextcontents are:",prodtrim)
        console.log("all innertext")
        const product3=await produclist.allInnerTexts();
        console.log("all inner text:",product3);
        
       
        // const productName=await produclist.nth(i).innerText();
        // console.log(productName)
//3 all()  
        const productLocators:Locator[]=await produclist.all();
        console.log("all the locatos",productLocators);
        console.log("first locator:",productLocators[1]);
        for(const a of productLocators)
        {
            console.log("each locator",await a.innerText())
        }

});