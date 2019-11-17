function FindGreatestSumOfSubArray(array) {
    // 动态规划的状态转移方程式为 dp[i] = max(a[i],a[i]+dp)
    // write code here
    if(array.length<1){
        return null;
    }
    let res = 0;
    let sum = 0;
    let flag = array.every((item)=>item<0);
    if(flag){
        array.sort((a,b)=>b-a);
        return array[0];
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        res = Math.max(sum, res);
        if (sum < 0) {
            sum = 0;
        }
    }
    return res;
}
module.exports = {
    FindGreatestSumOfSubArray: FindGreatestSumOfSubArray
};