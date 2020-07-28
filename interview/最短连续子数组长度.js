const solve = (arr, k) => {
  let left = 0, right = 0;
  let len = arr.length;
  let window = []
  let res = Number.MAX_VALUE;
  for (let i = 0;i<len;i++) {
    arr[i] += 1e5
  }
  k += 1e5;
  while (right < len) {
    window.push(arr[right])
    right ++;
    let sum = window.reduce((prev, now) => prev + now)
    while (sum > k || window.length) {
      if (sum - arr[left] < k) {
        break;
      } else if (sum - arr[left] === k){
        left++
        window.pop()
        break;
      } else if (sum - arr[left] > k) {
        sum = sum - arr[left]
        window.pop()
        left ++
      }
    }
    if (sum >= k) {
      res = Math.min(window.length , res)
    }
  }
  return res === Number.MAX_VALUE ? -1 : res;
}

console.log(solve([1], 1));
console.log(solve([1, 2], 4));
console.log(solve([2, -1, 2], 3));
console.log(solve([2, -1, 2, 1], 3));