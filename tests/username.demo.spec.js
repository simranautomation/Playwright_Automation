import { test, expect } from '@playwright/test';

test('Login with username and password', async ({ page }) => {
  await page.goto('https://intelliflow.in/#/');
  await page.getByPlaceholder('Workspace').click();
  await page.getByPlaceholder('Workspace').fill('intelliflow');
  await page.getByPlaceholder('Email ID').click();
  await page.getByPlaceholder('Email ID').fill('info@intelliflow.io');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: '# Menu' }).click();
  await page.getByRole('banner').locator('#dropdown-basic').click();
  await page.getByRole('button', { name: 'Logout' }).clear();
});




