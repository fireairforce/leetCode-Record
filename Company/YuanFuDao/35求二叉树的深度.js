/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 1;
    }
    // BFS层次遍历
    let cur = root;
    // 第一层是root，它使用null和下面一层进行分割开
    const queue = [root, null];
    let depth = 1;
    //  queue就是往上面推呗(这个地方null !== undefined 是返回true的)
    while ((cur = queue.shift()) !== undefined) {
        if (cur === null) {
            if (queue.length === 0) {
                return depth;
            }
            depth++;
            // 这个null是用来划分队列的层次的
            queue.push(null);
            continue;
        }
        if (cur.left) {
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }
    return depth;
};