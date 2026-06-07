import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

import { expect, test } from '@playwright/test';

const screenshotDir = join(
  process.cwd(),
  'dist/.playwright/apps/vite-base-ui-e2e/screenshots'
);

const pages = [
  {
    name: 'overview',
    path: '/dental-management/overview',
    heading: 'Dental Management Overview',
  },
  {
    name: 'patients',
    path: '/dental-management/patients',
    heading: 'Patients',
  },
  {
    name: 'billing',
    path: '/dental-management/billing',
    heading: 'Billing',
  },
] as const;

test.describe('dental management visual smoke @visual', () => {
  test.beforeAll(async () => {
    await mkdir(screenshotDir, { recursive: true });
  });

  for (const pageInfo of pages) {
    test(`${pageInfo.name} desktop screenshot @visual`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.goto(pageInfo.path);
      await expect(
        page.getByRole('heading', { name: pageInfo.heading })
      ).toBeVisible();

      await page.screenshot({
        path: join(screenshotDir, `${pageInfo.name}-desktop.png`),
        fullPage: true,
      });
    });

    test(`${pageInfo.name} mobile screenshot @visual`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(pageInfo.path);
      await expect(
        page.getByRole('heading', { name: pageInfo.heading })
      ).toBeVisible();

      await page.screenshot({
        path: join(screenshotDir, `${pageInfo.name}-mobile.png`),
        fullPage: true,
      });
    });
  }
});
