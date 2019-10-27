/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split('');
    let stack = [];
    for(let i = 0;i<arr.length;i++){
        if(['[','(','{'].indexOf(arr[i])>-1){
            stack.push(arr[i]);
        } else {
            if(!stack.length) {
                return false;
            }
            let c = stack.pop();
            let flag1 = (c==='(' && arr[i] !==')');
            let flag2 = (c==='{' && arr[i] !=='}');
            let flag3 = (c==='[' && arr[i] !==']');
            if(flag1 || flag2 || flag3){
                return false;
            }
        }
    }
    return stack.length === 0;
};