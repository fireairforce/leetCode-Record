function IsPopOrder(pushV, popV) {
    // write code here
    let arr = [];
    if (pushV.length === 0) return false;
    for (let i = 0, j = 0; i < pushV.length;i++) {
       arr.push(pushV[i]);
       while(j<popV.length&&arr[arr.length-1]===popV[j]){
           arr.pop();
           j++;
       }
    }
    return arr.length===0;
}
module.exports = {
    IsPopOrder: IsPopOrder
};