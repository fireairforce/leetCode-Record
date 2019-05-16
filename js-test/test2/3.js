function remove(arr, item) {
    var newArr = arr.slice(0);
    for (var i = 0; i < newArr.length; i++) {
        if(newArr[i]===item){
            newArr.splice(i,1);
            i--;
        }
    }
    return newArr;
}
// console.log(remove([1,2,3,4,2],2));