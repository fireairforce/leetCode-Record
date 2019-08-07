/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let tag = {};
  for (let i = 0; i < nums.length; i++) {
    tag[nums[i]] = 0;
  }
  for (let i = 0; i < nums.length; i++) {
    tag[nums[i]]++;
  }
  let arr = []
  Object.keys(tag).forEach(i => {
    arr.push(tag[i])
  })
  arr.sort((a, b) => b - a);
  arr = arr.slice(0,k);
  let tempArr = {};
  for(let i = 0;i<arr.length;i++){
    tempArr[arr[i]] = 1;
  }
  let num = [];
  Object.keys(tag).forEach(i => {
    if(tempArr[tag[i]]===1){
      num.push(parseInt(i));
    }
  })
  console.log(num);
};