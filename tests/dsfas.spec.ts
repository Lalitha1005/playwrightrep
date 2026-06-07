import {test,Page,Locator} from "@playwright/test"

test("verig" ,async ({page}) =>
{
    await page.goto("https://demoblaze.com/index.html")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("button[onclick='logIn()']").click()

}
)
