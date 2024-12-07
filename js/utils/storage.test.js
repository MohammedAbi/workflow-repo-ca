// storage.test.js
import { expect, describe, it, beforeEach } from "vitest";
import { saveToken, getToken } from "./storage";

describe("Storage functions", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe("saveToken", () => {
    it("saves the token to storage", () => {
      const testToken = "test-token";
      saveToken(testToken); // Call saveToken function to save the token
      expect(localStorage.getItem("token")).toBe(JSON.stringify(testToken)); // Check if it's stored
    });
  });

  describe("getToken", () => {
    it("retrieves the token from storage", () => {
      localStorage.setItem("token", JSON.stringify("test-token")); // Manually set the item in localStorage
      const retrievedToken = getToken(); // Call getToken function to get the token
      expect(retrievedToken).toBe("test-token"); // Assert that the retrieved token matches the stored token
    });

    // Will return null because beforeEach gives us a fresh empty storage
    it("returns null when no token exists", () => {
      const token = getToken(); // This will return null because beforeEach clears localStorage
      expect(token).toBeNull(); // Assert that it's null when no token is stored
    });
  });
});
