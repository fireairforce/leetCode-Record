/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 从数组的中间元素开始进行两端的递归构造就可以了
// 使用js进行取的时候使用位运算，别用/2了
var sortedArrayToBST = function (nums) {
    if (nums.length == 0) {
        return null
    }
    let root = new TreeNode(null)
    buildTree(root, nums, 0, nums.length - 1)
    return root
};

let buildTree = (root, nums, start, end) => {
    let mid = start + ((end - start) >> 1)
    root.val = nums[mid]
    if (start <= mid - 1) {
        root.left = new TreeNode(null)
        buildTree(root.left, nums, start, mid - 1)
    }
    if (mid + 1 <= end) {
        root.right = new TreeNode(null)
        buildTree(root.right, nums, mid + 1, end)
    }
}