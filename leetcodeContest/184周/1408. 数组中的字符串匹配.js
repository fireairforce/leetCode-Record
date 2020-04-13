/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let res = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (j === i) {
        continue
      }
       if(words[j].includes(words[i]) && !res.includes(words[i])) {
          res.push(words[i])
          break
       }
    }
  }
  return res
}
// console.log('superhero'.includes('hero'));
console.log(stringMatching(["mass","as","hero","superhero"]));