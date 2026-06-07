import { Page, Locator } from "@playwright/test"


export class Cartpage {
    private readonly page:Page
    private readonly productnameincart: Promise<Array<Locator>>

    constructor(page:Page)
    {
        this.page=page
        this.productnameincart=this.page.locator("tbody#tbodyid tr td:nth-child(2)").all();
    }

    //method to check if specific product is selected 
    async checkProductInCart(pname:string):Promise<boolean>
    {
        const prodname= await this.productnameincart

        for(const a of  prodname)
        {
            const name=await a.innerText()
            if(name?.trim()===pname)
            {
                return true;
            }
        }
        return false;
    }


}