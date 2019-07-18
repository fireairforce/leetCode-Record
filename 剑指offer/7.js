function Fibonacci(n) {
    // write code here
    let f = [];
    f[0] = 0;
    f[1] = 1;
    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
}
module.exports = {
    Fibonacci: Fibonacci
};