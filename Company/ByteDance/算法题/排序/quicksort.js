const quicksort = (arr) => {
  if (arr.length <= 0) {
    return arr;
  }
  let privotIndex = Math.floor(arr.length >> 1);
  let privot = arr.splice(privotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat([privot], quicksort(right));
};

console.log(quicksort([4,7,8,4,1,2,2]));
