/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  num1 = num1 + "";
  num2 = num2 + "";
  let l1 = num1.length,
    l2 = num2.length,
    store = new Array(l1 + l2 - 1).fill(0),
    t = 0,
    r = "";
  for (let i = 0; i < l2; i++) {
    for (let j = 0; j < l1; j++) {
      store[i + j] += +num2[i] * +num1[j];
    }
  }
  let k = store.length;
  while (k--) {
    t += store[k];
    r = (t % 10) + r;
    t = (t / 10) | 0;
  }
  return t > 0 ? t + r : r;
};
