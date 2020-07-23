/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let set = new Set();
    let count = 0;
    for(let i = 0;i<s.length;i++){
        if(set.has(s[i])) {
            count += 2;
            set.delete(s[i]);
        } else {
            set.add(s[i]);
        }
    }
    return set.size > 0 ? count + 1 : count;
};

console.log(longestPalindrome('babad'))