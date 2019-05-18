//  判断数组是不是二叉搜索树后序遍历的结果
/*
   二叉搜索树的合法序列是:对于一个序列S,最后一个元素是根元素，如果去掉最后一个元素的序列为T,那么T也可以满足:T可以分成两段，前一段小于根元素，后一段大于元素
*/
function VerifySquenceOfBST(sequence) {
    // write code here
    if (sequence === null || sequence.length == 0) {
        return false;
    }
    return Verify(sequence);
}
function Verify(sequence){
    if (sequence.length === 1) return true;
    let root = sequence[sequence.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] < root) {
            left.push(sequence[i]);
        } else {
            right = sequence.slice(i, sequence.length - 1);
            break;
        }
    }
    if (right.length === 0) {
        return true;
    }
    for (let i = 0; i < right.length - 1; i++) {
        if (right[i] < root) {
            return false;
        }
    }
    return Verify(right) && Verify(left);
}

module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};