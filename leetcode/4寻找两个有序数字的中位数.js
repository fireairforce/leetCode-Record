/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//  这个题目还没有解出来
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    findMedianSortedArrays(nums2, nums1);
  }
  let m = nums1.length;
  let n = nums2.length;
  let l = 0;
  let r = m;
  while (l <= r) {
    //   i为长度小的数组的二分参照点
    let i = Math.floor((r + l) / 2);
    // j为长度长的数组的二分点
    let j = Math.floor((m + n) / 2) - i ;
    let maxLeftA =
      i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1] ? nums1[i - 1] : 0;
    let minRightA = i === m ? Number.MAX_SAFE_INTEGER : nums1[i] ? nums1[i] : 0;

    let maxLeftB =
      j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1] ? nums2[j - 1] : 0;
    let minRightB = j === n ? Number.MAX_SAFE_INTEGER : nums2[j] ? nums2[j] : 0;
    // 满足条件的情况下
    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        );
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
  return 0.0;
};

console.log(findMedianSortedArrays([4, 5, 6, 8, 9], []));
