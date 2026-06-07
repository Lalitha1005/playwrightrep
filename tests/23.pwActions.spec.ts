    import {test,expect,Locator} from "@playwright/test"
// 1.input text box
    test("verify the input box actions", async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/");
       const name:Locator= page.locator("#name");
       await expect(name).toBeVisible();
       await expect(name).toHaveAttribute("maxlength","15");
       const maxl=await name.getAttribute("maxlength");
       console.log(maxl);
       console.log("type of maxlenght is :",typeof maxl);
       expect(maxl).toBe("15");
       await expect(name).toBeEmpty();
       await name.fill("Lalithavarshini aku");
       await expect(name).toBeEnabled();
       //await expect(name).toBeEmpty();
       const inname=await name.inputValue();
       
       console.log("name value captrued is :",inname);
       expect(inname).toBe("Lalithavarshini aku");
       
    });
//2.radio button use "only" annotation to execute only one test case -"test.only"
    test("verify the radio button methods",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/");
        const radiog:Locator=page.locator("#male");
        await expect(radiog).toBeVisible();
        await expect(radiog).toBeEnabled();
        expect(await radiog.isChecked()).toBe(false);
        radiog.check();
        await expect(radiog).toBeChecked();

    });

//3 check boxes

test.only("veirfy that all the check boxes are cehcked", async ({page})=> // used to check all the check boxes
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const daysche:Locator[]= days.map(element => page.getByLabel(element) );
    expect(daysche.length).toBe(7);
    for(const day of daysche)
    {
        await day.check();
        await expect(day).toBeChecked();
    }
     await page.waitForTimeout(3000);
    for(const day of daysche.slice(1,3)) //last 3 check boxes are unchecked"
    {
        await day.uncheck();
        await expect(day).not.toBeChecked();

    }
    await page.waitForTimeout(3000);
    for(const day of daysche)
    {
        if(await day.isChecked())
        {
            await day.uncheck();
            await expect(day).not.toBeChecked();
        }
        else
        {
            await day.check();
            await expect(day).toBeChecked();
        }    
    }
    await page.waitForTimeout(3000);
     
    const weekname="Friday";
    for(const label of days)
    {
        if(label.toLowerCase()==weekname.toLowerCase())
        {
        const day1=page.getByLabel(label);
        day1.check();
        await expect(day1).toBeChecked();
        }
    }
    await page.waitForTimeout(3000);
});


