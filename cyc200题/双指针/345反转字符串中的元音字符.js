/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let i = 0,
        j = s.length - 1;
    let word = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
        'A': 1,
        'E': 1,
        'I': 1,
        'O': 1,
        'U': 1
    }
    while (i <= j) {
        if (word[s[i]]) {
            j--;
            if (word[s[j]]) {
                let temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        } else if (word[s[j]]) {
            i++;
            if (word[s[i]]) {
                let temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        }
    }
};