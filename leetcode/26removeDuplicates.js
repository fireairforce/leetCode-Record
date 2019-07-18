var removeDuplicates = function(nums) {
  let len = nums.length;
  let count = 0;
  for(let i =1;i<len;i++){
      if(nums[i]===nums[i-1]){
          continue;
      } else {
          count ++;
          nums[count] = nums[i];
      }
  }
  return count;
};
let a = new removeDuplicates([1,1,2]);
console.log(a);