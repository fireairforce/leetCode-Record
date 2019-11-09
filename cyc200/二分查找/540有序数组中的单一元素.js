/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
  * 此题方法很巧妙，假设这个单一元素出现在index这个位置，那么在index之前，假设m为偶数，且m + 1 < index ,那么有nums[m] = nums[m+1]
  * 如果　m + 1 >= index 则有nums[m] != nums[m+1]
  * 根据这个规律可以去进行一个二分搜索,如果nums[m] = nums[m+1],则index 在　[m+2,h]这个区间里面，如果nums[m]!=nums[m+1],则数组在[l,m]之前 
  */
var singleNonDuplicate = function(nums) {
  let l = 0,
    h = nums.length - 1;
  while (l < h) {
    let m = Math.floor(l + (h - l) / 2);
    // 把m, l, h 这三者都保持在偶数位置,使得查找区间一直是奇数
    if(m % 2 === 1) {
       m -- ;
    }
    if(nums[m] === nums[m+1]) {
        l = m + 2;
    } else {
        h = m;
    }
  }
  return nums[l];
};

// console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
