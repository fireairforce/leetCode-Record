/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').reverse().filter(_c=>_c!=='').join(' ');
};

// console.log(reverseWords("a good   example"));