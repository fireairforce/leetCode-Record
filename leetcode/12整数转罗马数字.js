/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const reps = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let str = "";
  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      num -= values[i];
      str += reps[i];
    }
  }
  return str;
};
