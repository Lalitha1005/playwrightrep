import {test,Locator,expect} from "@playwright/test"

test("verify user is able to select an item from dynamic dropdonw" , async ({page})=>

    {
        await page.goto("https://www.flipkart.com/");
        const sear:Locator=page.locator("#twotabsearchtextbox");
        await sear.clear();
        sear.pressSequentially("smart");
        await page.waitForTimeout(5000);
        const searop:Locator=page.locator("ul>li");
        await page.waitForTimeout(5000);
        console.log(await searop.count());
    });