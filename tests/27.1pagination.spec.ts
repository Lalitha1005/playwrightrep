import {test,Locator,expect} from "@playwright/test"

test("verify user is able to fetch data from the table" , async({page})=>

{
     await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
     let hasmorepages=true; 
     while(hasmorepages)
     {
         const tablebody:Locator[]=await page.locator("#example tbody tr").all();
         for(let row of tablebody)
      {
         console.log(await row.innerText());
      }
         await page.waitForTimeout(3000);
         const nextpagebutton=page.locator("button[aria-label='Next']");
         const isdisabled=await nextpagebutton.getAttribute('class');

      if(isdisabled?.includes('disabled'))
      {
         hasmorepages=false;
      }
      else{
         await nextpagebutton.click();
   }
     // break;
}
     });

     test("verify user is able to filter data from the table" , async({page})=>

{
     await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
     page.waitForTimeout(2000)
     const noofrows=page.locator("#dt-length-0");
     await noofrows.selectOption('25');
      const rows:Locator[] =await page.locator("#example tbody tr").all();
      expect(rows.length).toBe(25);
});
      test.only("verify user is able to search data from the table" , async({page})=>

{
     await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
     await page.waitForTimeout(2000)
     const searchitem=page.locator("#dt-search-0");
     await searchitem.fill('Suki Burks')
     const rows:Locator[] =await page.locator("#example tbody tr").all();
     const len=rows.length;
     console.log(len)
     if(rows.length>=1)
     {
      let match=false;
      for(const row of rows)
      {
         ;
         const intext=await row.innerText();
         if(intext.includes('Suki Burks'))
         {
            console.log("details found")
            match=true;
         }
      }
     }
     else
         {
            console.log("details not found")
         }
     console.log(rows);


});