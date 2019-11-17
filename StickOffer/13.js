function reOrderArray(array)
{
    // write code here
    let arr = [],arr2 = [];
    array.forEach(item=>{
        if(item&1){ // 奇数
          arr.push(item);
        } else {
            arr2.push(item);
        }
    })
    return arr.concat(arr2);
}
module.exports = {
    reOrderArray : reOrderArray
};