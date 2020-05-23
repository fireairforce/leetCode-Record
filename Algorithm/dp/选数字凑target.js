const arr = [1, 13, 4, 5, 6, 7]
let target = 9

const rec_get = (arr, i, target) => {
  if (target === 0) {
    return true
  } else if (i === 0) {
    return arr[i] === target
  } else if (arr[i] > target) {
    return rec_get(arr, i - 1, target)
  } else {
    return rec_get(arr, i - 1, target) || rec_get(arr, i - 1, target - arr[i])
  }
}

console.log(rec_get(arr, arr.length - 1, target));

const dp_get = (arr, target) => {
}