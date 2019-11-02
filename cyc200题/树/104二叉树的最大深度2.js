var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    if(!root.left && !root.right) {
        return 1;
    }
    // BFS来一次层次遍历
    let cur = root;
    const queue = [root, null];
    let depth = 1;
    // queue是个队列，直到取空就莫得了,这个循环就跳出来了
    while((cur = queue.shift()) !== undefined) {
        if(cur === null) {
            if(!queue.length) {
                return depth;
            }
            depth ++;
            queue.push(null);
            continue;
        }
        const l = cur.left;
        const r = cur.right;
        if(l) {
            queue.push(l);
        } 
        if(r) {
            queue.push(r);
        }
    }
    return depth;
}