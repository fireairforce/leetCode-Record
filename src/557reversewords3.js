
let s = "Let's take LeetCode contest"
console.log(s.split(" ").map(item=>{
    return item.split('').reverse().join('')
}).join(' '));

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map(item=>{
        return item.split('').reverse().join('')
    }).join(' ')
};