import { test, expect } from "@playwright/test";

test.describe("navigate", () => {
  test("navigates to the home page", async ({ page }) => {
    // Navigate to the home page
    await page.goto(""); // Home page URL

    // Assert that the home page contains an expected element or title
    await expect(page).toHaveURL(""); // Ensure we're on the home page
    // Optionally, check for a heading or specific text on the home page
    await expect(page.locator("h1")).toContainText("Welcome"); // Home page text
  });

  test("waits for venue list to load", async ({ page }) => {
    // Navigate to the home page
    await page.goto(""); // Home page URL

    // Wait for the venue list to load
    const venueContainer = await page.locator("#venue-container");
    await expect(venueContainer).toBeVisible(); // Ensure the venue list is visible
  });

  test("clicks the first venue and checks venue details", async ({ page }) => {
    // Navigate to the home page
    await page.goto(""); // Home page URL

    // Wait for the venue list to load
    const venueContainer = await page.locator("#venue-container");
    await expect(venueContainer).toBeVisible(); // Ensure the venue list is visible

    // Click the first venue link
    const firstVenueLink = venueContainer.locator(
      "a.bg-cover.bg-center.h-64.rounded-lg.shadow-md:first-of-type",
    );
    await firstVenueLink.click();

    // Verify that the venue details page loads and contains "Venue details"
    const heading = await page.locator("h1"); // "h1" is the heading of the venue details page
    await expect(heading).toContainText("Venue details"); // Check for the correct heading text
  });
});
