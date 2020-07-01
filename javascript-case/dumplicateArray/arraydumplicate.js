const solve = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr.index(arr[i]) !== i) {
      arr.splice(i, 1)
      i--;
    }
  }
  return arr;
}