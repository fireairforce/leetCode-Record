/**
 * @param {number[]} scores
 * @return {number}
 */
var expectNumber = function(scores) {
  return [...new Set(scores)].length
};