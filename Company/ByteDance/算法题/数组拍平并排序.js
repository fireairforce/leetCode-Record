var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

const result = [];
const solve = (arr) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      solve(item);
    } else {
      result.push(item);
    }
  });
  result.sort((a, b) => a - b);
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] === result[i + 1]) {
      result.splice(i, 1);
    }
  }
  return result;
};
console.log(solve(arr));
