import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  //await page.getByLabel('Log in').getByText('Close').click();
  await page.getByRole('dialog',{name:'Log in'}).getByLabel('Close').click();
});