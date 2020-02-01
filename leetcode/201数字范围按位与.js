/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let i = 0;
    while(m !== n) {
        m = m >> 1;
        n = n >> 1;
        i++;
    }
    return m << i
};
