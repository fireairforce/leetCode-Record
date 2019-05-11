var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m+i] = nums2[i]; 
   }
   return nums1.sort((a,b)=>{
       return a-b;;
   })
};