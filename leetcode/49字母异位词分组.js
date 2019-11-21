/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let counts = [];
  const hashTable = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    counts = Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      // 转成ascill去计数
      counts[str[j].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = counts.join("");
    if (!hashTable[key]) {
      hashTable[key] = [str];
    } else {
      hashTable[key].push(str);
    }
  }
  return Object.values(hashTable);
};

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
