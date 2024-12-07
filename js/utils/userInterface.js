/**
 * Compares the `href` with the `currentPath` to determine if the link is active.
 * Supports matching exact paths, including handling root paths (`/`) and paths that contain `href` as a substring.
 *
 * @param {string} href - The `href` value to compare against the current path.
 * @param {string} currentPath - The current path of the application to compare with `href`.
 * @returns {boolean} Returns `true` if the `currentPath` matches or contains `href`, `false` otherwise.
 */
export const isActivePath = (href, currentPath) => {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  } else {
    return currentPath.includes(href);
  }
};
