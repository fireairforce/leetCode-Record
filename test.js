longest = (arr) => {
    let sum = 0,res = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i];
        res = Math.max(sum,res);
        if(sum<0){
            sum = 0;
        }
    }
    return res;
}
console.log(longest([1, 2, 3, -4, 2]));
// longest()