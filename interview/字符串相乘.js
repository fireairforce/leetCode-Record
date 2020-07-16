const multiply = (nums1, nums2) => {
  if (nums1 === '0' || nums2 === '0') {
    return "0"
  }
  nums1 += ''
  nums2 += ''
  let l1 = nums1.length
  let l2 = nums2.length
  let res = Array(l1 + l2 - 1).fill(0)
  let t = 0;
  let r = '';
  for (let i = 0; i < l2; i++) {
    for (let j = 0; j < l1; j++) {
      res[i + j] += (parseInt(nums2[i]) * parseInt(nums1[j]))
    }
  }
  let len = res.length;
  while (len--) {
    t += res[len]
    r = t % 10 + r;
    t = t / 10 | 0;
  }
  return t > 0 ? (t + r) : r
}

console.log(multiply('2', '3'));