/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
  let map = new Map()
  let res = []
  const solve = (name, index) => {
    if (map.has(name)) {
      // 如果现在这个文件map里面已经有了
      if(!name.includes('(')) {
        solve(`${name}(${index + 1})`, index + 1)
      } else {
        // 如果是已经有括号的,分本来就有括号的
        if (index !== 0) {
          let num = name.split(')').join('').split('(')
          
          let index = Number(num[num.length - 1])
          solve()
        } else {
           solve(`${name}(1)`, 1)
        }
      }
    } else {
      res.push(name)
      map.set(name, 1)
    }
  }
  for (let name of names) {
    solve(name, 0)
  }
  return res;
};

console.log(getFolderNames(["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"]));