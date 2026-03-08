import { test, expect } from '@playwright/test';

test('has hello world centered', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Assuming dev server port

  const greeting = page.locator('text=hello world');
  await expect(greeting).toBeVisible();

  const box = await greeting.boundingBox();
  const viewport = page.viewportSize();

  if (box && viewport) {
    const centerX = box.x + box.width / 2;
    const centerY = box.y + box.height / 2;

    const expectedX = viewport.width / 2;
    const expectedY = viewport.height / 2;

    expect(Math.abs(centerX - expectedX)).toBeLessThanOrEqual(1);
    expect(Math.abs(centerY - expectedY)).toBeLessThanOrEqual(1);
  }
});
