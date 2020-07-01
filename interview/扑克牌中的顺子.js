const solve = (arr) => {
  let len = arr.length;
  if (len < 5) {
    return false
  }
  arr.sort((a, b) => a - b)
  let newArr = []
  for (let item of arr) {
    if (item !== 0) {
      newArr.push(item)
    }
  }
  let newArr1 = Array.from(new Set(newArr))
  if (newArr1.length <= 1) {
    return true;
  } else {
    if (newArr[newArr.length - 1] - newArr[0] < 5 && newArr1.length === newArr.length) {
      return true;
    } else {
      return false;
    }
  }
}