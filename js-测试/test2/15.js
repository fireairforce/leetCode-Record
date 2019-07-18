function findAllOccurrences(arr, target) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target){
          newArr.push(i);
      }
    }
    return newArr;
}

