import { test, expect,Page} from '@playwright/test';

/* test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}); */

test("no of products" ,async ({page}) =>
{
   page.goto("https://demoblaze.com/index.html")
   await page.waitForTimeout(5000);
   await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("button[onclick='logIn()']").click()
    const prod=page.locator("#tbodyid .hrefch");
    console.log("productcount is :",await prod.count());
})
