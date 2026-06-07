import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Galaxy S9+'],
});

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('naren');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('fdsafsa');
  await page.getByLabel('Log in').getByText('Close').click();
  await expect(page.locator('#nava')).toContainText('PRODUCT STORE');
});