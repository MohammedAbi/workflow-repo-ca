import { expect, test } from "vitest";
import { isActivePath } from "./userInterface";

/**
 * This function compares the `href` and the `currentPath` to determine if the link should be considered active.
 * It supports matching exact paths, including handling root paths (`/`) and paths that contain the `href` as a substring.
 * It returns `true` if the current path matches the conditions specified; otherwise, it returns `false`.
 *
 * @param {string} href - The `href` value to compare against the current path.
 * @param {string} currentPath - The current path of the application to compare with `href`.
 * @returns {boolean} Returns `true` if the `currentPath` matches or contains `href`, `false` otherwise.
 */

/**
 * Unit tests for the `isActivePath` function to ensure correct behavior in different scenarios.
 */

test("Returns true when current path matches href exactly", () => {
  /**
   * Test case: When the current path exactly matches the `href`
   * - Tests if the function returns `true` for exact matches of paths, including root and specific paths.
   */
  expect(isActivePath("/", "/")).toBe(true);
  expect(isActivePath("/", "/index.html")).toBe(true);
  expect(isActivePath("/login", "/login")).toBe(true);
  expect(isActivePath("/register", "/register")).toBe(true);
  expect(isActivePath("/venue", "/venue")).toBe(true);

  // exact match with trailing slash
  expect(isActivePath("/login/", "/login/")).toBe(true);
  expect(isActivePath("/register/", "/register/")).toBe(true);
  expect(isActivePath("/venue/", "/venue/")).toBe(true);
});

test("Returns false when paths don't match", () => {
  /**
   * Test case: When the current path does not match the `href`
   * - Tests if the function returns `false` for paths that don't match or have no overlap.
   */
  expect(isActivePath("/login", "/contact")).toBe(false);
  expect(isActivePath("/venue", "/about")).toBe(false);
});

test("Returns true when current path includes the href", () => {
  /**
   * Test case: When the current path contains the `href` as part of the path
   * - Tests if the function returns `true` when the `href` is a substring of the current path.
   */
  expect(isActivePath("/login", "/login/")).toBe(true); // /login is included in /login/
  expect(isActivePath("/venue", "/venue/123")).toBe(true); // /venue is included in /venue/123
});

test("Returns false when paths don't match and don't include", () => {
  /**
   * Test case: When the current path neither matches nor includes the `href`
   * - Tests if the function correctly returns `false` when there's no match or inclusion of `href`.
   */
  expect(isActivePath("/register", "/login/")).toBe(false); // no match or inclusion
  expect(isActivePath("/about", "/contact/")).toBe(false); // no match or inclusion
});
