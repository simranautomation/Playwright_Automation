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
  await page.pause()
  await page.getByRole('link', { name: 'Access Controller Manages user permissions, ensuring secure and authorized access to resources and data.' }).click();
  await page.locator('svg').first().click();
  await page.getByRole('option', { name: 'App Store' }).click();
  await page.locator('.selectRole > div > div > #customSelect-select > .r_sel__control > .r_sel__value-container > .r_sel__input-container').click();
  await page.getByRole('option', { name: 'DEFAULT ROLES TESTERS' }).click();
  await page.getByRole('button', { name: 'Style' }).click();
  await page.locator('#flexSwitchCheckDefault').uncheck();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.locator('#dropdown-basic').click();
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.waitForTimeout(5000)
});