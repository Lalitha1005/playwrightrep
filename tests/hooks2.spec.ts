import { test, Locator, expect, Page } from "@playwright/test"
let page: Page;
test.beforeAll("Open app", async ({ browser }) => {
    page = await browser.newPage()
    page.goto("https://demoblaze.com/index.html")
});
test.afterAll("close app", async () => {
    await page.close()
});
test.beforeEach("login", async () => {
    await page.locator("#login2").click();
    await page.locator("#loginusername")
    await page.locator("#loginpassword")
    await page.locator("button[onclick='logIn()']").click()
    page.waitForTimeout(2000)
})

test.afterEach("log out", async () => {
    await page.locator("#logout2");
})
test("no of products", async () => {
    const prod = page.locator("tbodyid");
    prod.count();
})