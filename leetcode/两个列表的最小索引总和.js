/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let min = 9999
  let map = new Map()
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        min = Math.min(i + j, min)
        map.set(list1[i], i + j)
      }
    }
  }
  let res = []
  for (let item of map) {
    if (item[1] === min) {
      res.push(item[0])
    }
  }
  return res
}
