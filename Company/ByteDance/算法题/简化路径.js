/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function(path) {
  let path1 = require("path");
  let path2 = path1.normalize(path);
  if (path2.endsWith("/")) {
    return path2.slice(0, path2.length - 1);
  }
  return path2;
};

console.log(simplifyPath("/home/"));
