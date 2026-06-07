import { test, expect } from '@playwright/test';

test.describe('dental management demo', () => {
  test('opens the overview route', async ({ page }) => {
    await page.goto('/dental-management/overview');

    await expect(page.getByText('Dental Management Overview')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Patients' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Billing' })).toBeVisible();
  });

  test('navigates through the dental sidebar', async ({ page }) => {
    await page.goto('/dental-management/overview');

    await page.getByRole('link', { name: 'Patients' }).click();
    await expect(page).toHaveURL(/\/dental-management\/patients$/);
    await expect(page.getByText('Patient Queue')).toBeVisible();

    await page.getByRole('link', { name: 'Billing' }).click();
    await expect(page).toHaveURL(/\/dental-management\/billing$/);
    await expect(page.getByRole('heading', { name: 'Billing' })).toBeVisible();
  });
});
