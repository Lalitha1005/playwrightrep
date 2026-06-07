import {test,Locator,expect} from "@playwright/test"

test("verify user is able to fetch values from the table" , async ({page})=>

{
     await page.goto("https://testautomationpractice.blogspot.com/");
//1. entire table
     const tableloc:Locator=page.locator("table[name='BookTable'] tbody"); 
     await expect(tableloc).toBeVisible();
     //count no of rows in a table
     const trows=page.locator("table[name='BookTable'] tbody tr")       //brings the no of rows in a table.
     const trowscount=await trows.count();
     console.log("no of rows in the table are",trowscount)
     //expect(trowscount).toBe(7);
     await expect(trows).toHaveCount(7);
     await page.waitForTimeout(3000);
//2  no of columns
     const columns:Locator=tableloc.locator("th");    //as we captured the path for table in tableloc we are using it here
     const colcount=await columns.count();
     console.log("no of columns in the table are:",colcount)
     await expect(columns).toHaveCount(4);
//3 read all data from row 2
     const secondRowCells:Locator=trows.nth(2).locator('td');
     console.log("cells",secondRowCells)
     const secondRowText=await secondRowCells.allInnerTexts(); // returns [ 'Learn Java', 'Mukesh', 'Java', '500' ]
     console.log("second row text",secondRowText);
     await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

//4 fetching all rows data      
     const allRowData=await trows.all();
     console.log("fetching all rows data")
      for(let row of allRowData.slice(-1))
          {
               const cols=await row.locator('td').allInnerTexts();
               console.log(cols);

          }
         
//5 specifit author books details
     const mukeshbook:string[]=[];
     // const allCells=await trows.locator('td').allInnerTexts();
     // console.log("all cells",allCells);
     for(let row of allRowData)
     {
          const cells=await row.locator('td').allInnerTexts();
          const author=cells[1];
          const book=cells[0];
        if(author==='Mukesh')
        {
          mukeshbook.push(book);
        }
        
     }
     console.log(mukeshbook.length);
//6 totol books cost
     let totalprice:number=0;
     for(let row of allRowData.slice(1))
     {
          const cells=await row.locator('td').allInnerTexts();
          const price=cells[3];
        
        totalprice=totalprice+parseInt(price);
     }
     console.log("total cost of all books is :"+totalprice);

});