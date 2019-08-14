/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let l = 0,
    r = letters.length - 1;
  while (l <= r) {
    let mid = Math.floor(l + (l - r) / 2);
    if (letters[mid] <= target) {
      l = mid + 1;
    } else {
      m = mid - 1;
    }
  }
  return l < target.length - 1 ? letters[l] : letters[0];
};
console.log(nextGreatestLetter(['a', 'b'], 'a'));