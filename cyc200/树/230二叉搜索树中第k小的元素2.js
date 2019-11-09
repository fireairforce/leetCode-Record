var kthSmallest = function(root, k) {
    // 中序遍历来写
    if(!root) {
        return null;
    }
    let stack = [root];
    let res = [];
    let left = root.left;
    while(left) {
        stack.push(left);
        left = left.left;
    }
    let item;
    while(item=stack.pop()){
        res.push(item.val);
        let t = item.right;
        while(t) {
            stack.push(t);
            t = t.left;
        }
    }
    return res.sort((a,b)=>a-b)[k-1];
};
