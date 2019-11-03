/**
 * @param {string[]} strs
 * @return {string}
 */

//  使用暴力法，直接搞就完事了
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    let res = '';
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]) {
                return res;
            }
        }
        res += strs[0][j];
    }
    return res;
};