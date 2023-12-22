import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.dev.intelliflow.in/');
  await page.getByPlaceholder('Workspace').click();
  await page.getByPlaceholder('Workspace').fill('testers');
  await page.getByPlaceholder('Email ID').click();
  await page.getByPlaceholder('Email ID').fill('simran.ghodke@intelliflow.ai');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Simran@1996');
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.getByRole('button', { name: '# Menu' }).click();
  await page.click('id=header-main-menu')
  await page.getByRole('link', { name: 'Admin Dashboard' }).click();
  await page.getByRole('link', { name: 'Bulk Upload This Allows you to take immediate bulk action on issues and opportunities you want to update data in a shot' }).click();
  await page.locator('.r_sel__indicators > div:nth-child(3)').click();
  await page.getByText('Car Data').first().click();
  await page.locator('div:nth-child(2) > div > .px-1 > #customSelect-select > .r_sel__control > .r_sel__value-container > .r_sel__input-container').click();
  await page.getByRole('option', { name: 'Data' }).click();
  await page.locator('div:nth-child(3) > div > .px-1 > #customSelect-select > .r_sel__control > .r_sel__value-container > .r_sel__input-container').click();
  await page.getByRole('option', { name: 'Row wise data' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download Template' }).click();
  const download = await downloadPromise;
  await page.locator('#dropdown-basic').click();
  await page.getByRole('button', { name: 'Logout' }).click();
});