/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  s = s.split('')
  let list = []
  let map = new Map();
  let max = 0;
  const dfs = (str, index) => {
    if (index === str.length){
      if (list.length > max) {
        max = list.length;
        return;
      }
    }
    for (let i = index;i<str.length;i++) {
      if (!map.get(str.slice(index, i + 1).join(''))) {
        map.set(str.slice(index, i + 1).join(''), 1)
        list.push(str.slice(index, i + 1))
        dfs(str, i + 1)
        list.pop()
        map.set(str.slice(index, i + 1).join(''), 0)
      }
    }
  }
  dfs(s, 0);
  return max;
};

// console.log(maxUniqueSplit('ababccc'));