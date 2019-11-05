// 前序遍历的顺序为根左右
var qx = (root) => {
    if(!root){
        return [];
    }
    const ret = [];
    const stack = [root];
    let t = stack.pop();
    while(t){
        ret.push(t.val);
        // 先把右边放进去栈里面去,后续先弹出来的是左边的节点
        t.right && ret.push(t.right);
        t.left && ret.push(t.left);
        // 这个地方会先推栈顶的左节点
        t = stack.pop();
    }
    return ret;
}