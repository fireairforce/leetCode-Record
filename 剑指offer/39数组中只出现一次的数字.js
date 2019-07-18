function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let o = {};
    for(let i =0;i<array.length;i++){
        if(!o[array[i]]){
            o[array[i]] = 1;
        } else {
            o[array[i]]++;
        }
    }
    let res = [];
    for(let i =0;i<array.length;i++){
        if(o[array[i]]===1){
            res.push(array[i]);
        }
    }
    return res;
}
module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};