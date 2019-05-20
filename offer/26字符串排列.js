function Permutation(str) {
    // write code here
    if (str.length <= 0) return [];
    let str2 = '';
    let res = [];
    let arr = str.split('');
    findString(arr, str2, res);
    return res;
}

function findString(arr, str2, res) {
    //arr存的是字符数组,str2存的是拼接的结果
    if (arr.length === 0) {
        res.push(str2);
    } else {
        let isUsed = {}; // isUsed用来标记已经被放过的字母
        for (let i = 0; i < arr.length; i++) {
            if (!isUsed[arr[i]]) {
                let temp = arr.splice(i, 1)[0];
                str2 += temp;
                findString(arr, str2, res);
                arr.splice(i, 0, temp);// 重新开始进行新的一轮排序
                str2 = str2.slice(0, str2.length - 1);
                isUsed[temp] = true;
            }
        }
    }
}
module.exports = {
    Permutation: Permutation
};