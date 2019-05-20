function NumberOf1Between1AndN_Solution(n) {
    // write code here
    let count = 0;
    let number;
    for (let i = 1; i <= n; i++) {
        number = i;
        while (number) {
            if (number % 10 === 1) {
                count++;
            }
            number = Math.floor(number / 10);
        }
    }
    return count;
}
module.exports = {
    NumberOf1Between1AndN_Solution: NumberOf1Between1AndN_Solution
};