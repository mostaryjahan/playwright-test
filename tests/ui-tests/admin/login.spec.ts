import { test, expect } from "@playwright/test";

test("verify admin login with credentials", async ({ page }) => {
  await page.goto("https://eventmate-brown.vercel.app/login");
  await page.getByRole("button", { name: "Login as an Admin" }).click();
  await page.waitForURL("**/admin/dashboard");

  await expect(
    page.getByText(/welcome,\s*admin/i)
  ).toBeVisible();
});
