var invertTree = function(root) {
    if(!root) {
        return root;
    }
    const stack = [root];
    let current = null;
    while((current = queue.shift())){
        const l = current.left;
        const r = current.right;
        current.right = l;
        current.left = r;
        if(l) {
            stack.push(l);
        }
        if(r) {
            stack.push(r);
        }
    }
    return root;
}