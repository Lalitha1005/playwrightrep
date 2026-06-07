import { test, expect, Locator } from "@playwright/test";



test('Verfy the failure screenshot', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true }); // to enable trace with in the test
  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('naren');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('naren');
  page.once('dialog', dialog => {
    page.screenshot({ path: '/screenshots/dialogbox.png' });
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.waitForTimeout(8000)
  await page.getByRole('button', { name: 'Log in' }).click();
  //await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();

  await context.tracing.stop({ path: 'trace_1.zip' });
});