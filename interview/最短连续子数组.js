const solve = (arr, k) => {
  let len = arr.length
  let res = Number.MAX_VALUE;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = arr[i]
    if (sum >= k) {
      res = 1
    }
    for (let j = i + 1; j < len; j++) {
      sum += arr[j]
      if (sum >= k) {
        res = Math.min(res, j - i + 1)
        break
      }
    }
  }
  return res === Number.MAX_VALUE ? -1 : res;
}

console.log(solve([1], 1));
console.log(solve([1, 2], 4));
console.log(solve([2, -1, 2], 3));
console.log(solve([2, -1, 2, 1], 3));