/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let hash = 'ZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let str = '';
    if (n <= 26) {
        return hash[n];
    } else {
        while (n > 26) {
            let x = n % 26;
            str = hash[x] + str;
            n = (n - (x === 0 ? 26 : x)) / 26;
        }
        return hash[n] + str;      
    }

};
console.log(convertToTitle(701));