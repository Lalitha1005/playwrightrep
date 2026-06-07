import { Page, Locator } from "@playwright/test"


export class Loginpage {
    //define the variables
    private readonly page: Page
    private readonly loginlink: Locator
    private readonly userName: Locator
    private readonly password: Locator
    private readonly loginButton: Locator
    private readonly cancelButton: Locator

    // define the constructor
    constructor(page: Page) {

        this.page=page
        this.loginlink=this.page.locator("#login2");
        this.userName=this.page.locator("#loginusername1")
        this.password=this.page.locator("#loginpassword")
        this.cancelButton=this.page.getByRole('dialog',{name:'Log in'}).getByLabel('Close');
        this.loginButton=this.page.locator("button[onclick='logIn()']")
    }

    //action methods
    async clickOnLoginLink():Promise<void>
    {
        await this.loginlink.click()
    }
    async enter_userName(name:string):Promise<void>
    {
       //await this.page.waitForTimeout(3000)
       await this.userName.fill(name)
    }
      async enter_pssword(pass:string):Promise<void>
    {
       await this.password.fill(pass)
    }
    async clickOnLoginbutton():Promise<void>
    {
       await  this.loginButton.click()
    }
    async clickOnCancelbutton():Promise<void>
    {
        this.cancelButton.click()
    }

    async performLogin(uname:string,pass:string)
    {
       await this.clickOnLoginLink()
        await this.enter_userName(uname)
        await this.enter_pssword(pass)
        await this.clickOnLoginbutton();
    }
 
}