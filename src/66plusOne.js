let nums = [ 9];
for(let i=nums.length-1;i>=0;i--){
    if(nums[i]<9){
        nums[i] = nums[i] + 1;
        break; 
    } else if(i==0&&nums[i]==9){
        nums[i] = 0;
        nums.unshift(1);
    } else if(nums[i]==9){
        nums[i] = 0;
    }
}
console.log(nums);


var plusOne = function(digits) {
   for(let i = digits.length-1;i>=0;i--){
       if(digits[i]<9){
           digits[i] += 1;
           break;
       } else if(i===0&&digits[i]===9){
           digits[i] = 0;
           digits.pop(1);
       } else if(digits[i]===9){
           digits[i] = 0;
       }
   }
   return digtis;
};