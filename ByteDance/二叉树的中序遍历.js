// 中序遍历的顺序是左根右
const inorderTraversal = (root) => {
    if(!root){
        return [];
    }
    let ret = [];
    let stack = [root];
    let left = root.left;
    // 先把左子树存入栈里面
    while(left) {
        stack.push(left);
        left = left.left;
    }
    let item;
    while((item = stack.pop())) {
        ret.push(item.val);
        let t = item.right;
        while(t) {
            stack.push(t);
            t = t.left;
        }
    }
    return ret;
}