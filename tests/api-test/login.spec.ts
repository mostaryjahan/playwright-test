import { expect, test } from '@playwright/test'


test("verify admin can login with valid Credential", async ({ page }) => {
    await page.goto('https/login')
    await page.locator('input[name="email"]').click();await page.locator('input[name="email"]').fill('monayemhossain347@gmail.com');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('1234567');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
})