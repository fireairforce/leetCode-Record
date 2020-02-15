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
var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 1;
    }
    let depth = 1;
    let cur = root;
    let queue = [root, null];
    while ((cur = queue.shift()) !== undefined) {
        if (cur === null) {
            if (!queue.length) {
                return depth;
            }
            depth++;
            queue.push(null);
            continue;
        }
        if (!cur.left && !cur.right) {
            return depth;
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