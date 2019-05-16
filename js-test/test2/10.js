function insert(arr, item, index) {
   var newArr = arr.slice(0);
   newArr.splice(index,0,item);
   return newArr;
} 