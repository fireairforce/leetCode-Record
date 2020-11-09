const swap = (x, y) => {
  x = x ^ y;
  y = x ^ y;
  x = x ^ y;
}

const solve = (arr) => {
  let n = arr.length;
  const quickSort = (arr, l, r) => {
    if (l >= r) {
      return;
    }
    let x = arr[Math.floor((l + r) >> 1)], i = l - 1, j = r + 1;
    while (i < j) {
      while (arr[++i] < x);
      while (arr[--j] > x);
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    quickSort(arr, l, j);
    quickSort(arr, j + 1, r);
  }
  quickSort(arr, 0, n - 1);
  console.log(arr);
}

solve([5, 4, 7, 1, 2]);