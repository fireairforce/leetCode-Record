/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    A.sort((a, b) => a - b)
    let r = [];
    let odd = 1;
    let even = 0;
    A.forEach(item => {
        if (item % 2 === 1) {
            r[odd] = item;
            odd += 2;
        } else {
            r[even] = item;
            even += 2;
        }
    })
    return r;
};
console.log(sortArrayByParityII([4,5,2,7]));