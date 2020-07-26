const solve = (arr, k) => {
  let left = 0, right = 0;
  let len = arr.length;
  let window = []
  let res = Number.MAX_VALUE;
  while (right < len) {
    window.push(arr[right])
    right ++;
    let sum = window.reduce((prev, now) => prev + now)
    console.log(sum);
    while (sum > k || window.length) {
      if (sum - arr[left] < k) {
        break;
      } else if (sum - arr[left] === k){
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

