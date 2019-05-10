/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let len1 = a.length,
        len2 = b.length;
    let c = [],
        k = 0,
        len = Math.min(len1, len2);
    for (let i = 0, k1 = len1, k2 = len2; i < len; i++) {
        c[k] = parseInt(a[k1 - 1]) + parseInt(b[k2 - 1]);
        k++;
        k1--;
        k2--;
    }
    for (let i = len; i < Math.max(len1, len2); i++) {
        if (a[i] && !b[i]) {
            c[k] = parseInt(a[Math.max(len1, len2) - i-1]);
        } else if (!a[i] && b[i]) {
            c[k] = parseInt(b[Math.max(len1, len2) - i-1]);
        }
        k++;
        
    }
    c.reverse();
    for (let i = c.length - 1; i > 0; i--) {
        while (c[i] >= 2) {
            c[i] -= 2;
            c[i - 1]++;
        }
    }
    let sum = 0;
    while (c[0] >= 2) {
        c[0] -= 2;
        sum++;
    }
    return sum !== 0 ? sum + '' + c.join('') : c.join('')
};
// console.log(addBinary('100', '110010'));