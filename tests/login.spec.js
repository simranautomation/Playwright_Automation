import { test, expect } from '@playwright/test';

test('login page', async ({ page }) => {
  await page.locator('body').click();
  await page.getByPlaceholder('Workspace').click();
  await page.getByPlaceholder('Workspace').fill('intelliflow');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Email ID').click();
  await page.getByPlaceholder('Email ID').fill('info@intelliflow.io');
  await page.getByRole('button', { name: 'Login' }).click();
});