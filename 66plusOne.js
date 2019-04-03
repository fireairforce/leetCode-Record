let nums = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3],nums2 = [],str1 = '';
for (let i = 0; i < nums.length; i++) {
    str1 += nums[i];
}

let sum = parseInt(str1) + 1;

str2 = sum + "";
for (let i = 0; i < str2.length; i++) {
    nums2.push(str2[i]);
}
console.log(nums2);


// var plusOne = function(digits) {
//     let num = [],str1 = '';
//     for(let i=0;i<digits.length;i++){
//         str1 += digits[i];
//     }
//     let sum = parseInt(str1) + 1;
//     let str2 = sum + "";
//     for(let i=0;i<str2.length;i++){
//         num.push(str2[i]);
//     }
//     return num;
// };