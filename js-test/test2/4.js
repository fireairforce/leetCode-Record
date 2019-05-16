function removeWithoutCopy(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]===item){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
// console.log(remove([1,2,3,4,2],2));