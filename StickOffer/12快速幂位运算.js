//  二分乘法，将多次乘法运算的时间复杂度由O(n)降到O(logN)

function Power(base, exponent) {
    // write code here
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    if (exponent < 0) {
        return 1/Power(base,-exponent);
    }
    let ans = Power(base, Math.floor(exponent / 2));
    ans *= ans;
    if (exponent % 2 === 1) { // 如果n是个奇数就得再乘一次
        ans *= base;
    }
    return ans;
}
module.exports = {
    Power: Power
};

// 快速幂算法,将exponent(幂次分为二进制形式),比如说3的11次方，把11拆成2^3+2^1+2^0,这样就只用求3^1和3^2和3^8
function ModPower(base, exponent) {
    // write code here
    let r = 1;
    let a = base;
    if(exponent<0){
        return 1/ModPower(base,-exponent)
    }
    while (exponent != 0) {
        if (exponent & 1) { //偶数二进制的最后一位都是0,奇数最后一位为1，偶数求 & 结果铁定为0，奇数就是1了
            r = a * r;
        }
        a *= a;   //这里的a实际上是在积累，使得在二进制中遇到1的时候可以乘到对应位数的值
        exponent>>=1;  // 对指数直接进行右移一位，继续去判断有没有1
     }
    return r;
}

module.exports = {
    ModPower
};