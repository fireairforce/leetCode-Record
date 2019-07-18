function count(arr, item) {
  var count = 0;
  arr.forEach(function(v){
      if(v===item){
          count++;
      }
  })
  return count;
}