function prepend(arr, item) {
   var newArr = arr.slice(0);
   newArr.unshift(item);
   return newArr;
}

console.log(prepend([1,2,3,4],10));