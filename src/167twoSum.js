/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let x2 = numbers.indexOf(target - numbers[i], i + 1); // 表示从数组i之后的地方开始找起
        if (x2 > -1 && x2 > i) {
            return [i + 1, x2 + 1];
        }
    }
    return []
};
// console.log(twoSum([0, 0, 3, 4], 0));