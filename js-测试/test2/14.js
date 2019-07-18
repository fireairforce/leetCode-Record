function square(arr) {
   var newArr = [];
   arr.forEach(function(item){
       newArr.push(Math.pow(item,2));
   })
   return newArr;
}