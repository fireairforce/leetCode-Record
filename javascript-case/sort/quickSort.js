const quickSort = (arr) => {
  if (!arr.length) {
    return arr
  }
  let left = []
  let right = []
  let privotIndex = Math.floor(arr.length / 2)
  let privot = arr.splice(privotIndex, 1)[0]
  for (let item of arr) {
    if (item < privot) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  return quickSort(left).concat([privot], quickSort(right))
}
