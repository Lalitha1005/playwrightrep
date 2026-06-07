import { Page, Locator } from "@playwright/test"

export class homePage {
    private readonly page: Page;
    private readonly productList: Promise<Array<Locator>>

    private readonly addToCartButton: Locator
    private readonly cartLink: Locator

    constructor(page: Page) {
        this.page = page
        this.addToCartButton = this.page.locator("a:has-text('Add to cart')")
        this.productList = this.page.locator("#tbodyid div.card h4.card-title a").all();
        this.cartLink = this.page.locator("#cartur")
        //this.productListLocator=this.page.locator()
    }
    // method to add specific product to cart
    async addProductToCart(productname: string): Promise<void> {
        const productElements = this.productList

        for (const prod of await productElements) {
            const name = await prod.innerText();
            if (name?.trim() === productname) {
                await prod.click();
                break;
            }
        }

        //handling aler dialog box
        this.page.on('dialog',async (dialog)=>
        {
            if((dialog.message().includes("added")))
            {
                await dialog.accept();
            }
        })
        await this.addToCartButton.click();

    }
    async goToCart()
    {
        await this.cartLink.click();
    }
    
    
}