/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  // 开两个map,map1用来记录原始里面有哪些文件，map2用来记录文件名已经到编号多少了
  let mp1 = new Map()
  let mp2 = new Map()
  for (let name of names) {
    // 记录某个文件名的后缀
    mp2.set(name, 1)
  }
  let res = []
  for (let name of names) {
    if (mp1.has(name)) {
      for (let i = mp2.get(name); i < names.length; i++) {
        if (!mp1.has(`${name}(${i})`)) {
          res.push(`${name}(${i})`)
          mp1.set(`${name}(${i})`, 1)
          mp2.set(name, i + 1)
          break;
        }
      }
    } else {
      res.push(name)
      mp1.set(name, 1)
    }
  }
  return res
}

// console.log(getFolderNames(["kaido","kaido(1)","kaido","kaido(1)","kaido(2)"]));
