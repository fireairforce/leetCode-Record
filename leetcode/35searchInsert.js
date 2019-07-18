var searchInsert = function (nums, target) {
    if (nums.indexOf(target) > -1) {
        return nums.indexOf(target);
    } else {
        let flag = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > target) {
                flag = 1;
                return i;
            }
        }
        if (!flag) {
            return nums.length;
        }
    }
};
