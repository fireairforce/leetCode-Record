function duplicates(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
         if(arr.indexOf(arr[i],i+1)!==-1){
            newArr.push(arr[i]);
         }
    }
    var newArrI = newArr.filter(function(item,index,self){
        return self.indexOf(item) === index;
    })
    return newArrI;
}
// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));