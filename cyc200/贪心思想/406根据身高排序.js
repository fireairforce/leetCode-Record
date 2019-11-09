/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  if (people === null || people.length === 0) {
    return [];
  }
  // 按照身高降序，人数升序进行排序
  people.sort((a, b) => (
    a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
  ))
  // console.log(people);
  let arr = [];
  for (let i = 0; i < people.length; i++) {
      arr.splice(people[i][1],0,people[i]);
  }
  // console.log(arr);
  return arr;
};

// reconstructQueue([
//   [7, 0],
//   [4, 4],
//   [7, 1],
//   [5, 0],
//   [6, 1],
//   [5, 2]
// ]);