function LastRemaining_Solution(n, m) {
    // write code here
    if(m===0||n==0){
        return -1;
    }
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = i;
    }
    while (a.length > 1) {
        for (let i = 0; i < m-1; i++) { //循环m-2次
          a.push(a.shift());
        }
        a.shift();
    }
    return a.shift();
}
// console.log(LastRemaining_Solution(5,3));
module.exports = {
    LastRemaining_Solution: LastRemaining_Solution
};