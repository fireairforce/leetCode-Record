// 找数组中最大的k个元素

// 利用快排的的思路来做
// 思路就是先找个中枢值，把数组分成大于中枢值和小于中枢值的两部分
// 如果交换之后中枢值正好是从后面数的第k个，那么就返回中枢值
// 后面的数字大于中枢值，按照同样的方式从后面找
// 小于则按照同样的方式往前面找

const findKthLargest = (nums, k) => {
  k = nums.length - k;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let i = left;
    // 把数组以 a[left]的大小拆分成两部分
    // 一部分小于 a[left]，一部分大于 a[right]
    // [left, i] < A[left], [i + 1, j] >= A[left]
    for (let j = left + 1; j <= right; j++) {
      if (nums[j] < nums[left]) {
        if (j !== ++i) {
          [nums[i], nums[j]] = [nums[j], nums[i]]
        }
      }
    }
    [nums[left], nums[i]] = [nums[i], nums[left]]
    if (k === i) {
      return nums[i]
    } else if (k < i) {
      right = i - 1
    } else {
      left = i + 1
    }
  }
  return -1;
}

console.log(findKthLargest([1, 2, 3, 4], 1));