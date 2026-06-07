import { expect, test } from "@playwright/test"

test("veirfy the home screen", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/")

    // approach 1
    // expect(await page.screenshot()).toMatchSnapshot("home.png");
    // approach 2
     await expect(page).toHaveScreenshot();
     page.locator("img[alt='Tricentis Demo Web Shop']")
     expect(await page.screenshot()).toMatchSnapshot("logo.png");

})
