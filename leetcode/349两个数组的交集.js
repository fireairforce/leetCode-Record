/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let a = new Set();
    for(let i = 0;i<nums1.length;i++){
        a.add(nums1[i]);
    }
    const res = [];
    for(let i = 0;i<nums2.length;i++){
        if(a.has(nums2[i])){
          res.push(nums2[i]);
        }
    }
    return [...new Set(res)];
};