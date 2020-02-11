/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let max = 0

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    // new TreeNode(null)
    max = 0
    depth(root)
    return max
};

var depth = (root) => {
    if (root) {
        let left = depth(root.left)
        let right = depth(root.right)
        // 对比直径长度最大值（两个节点路径的和）
        max = Math.max(max, left + right)
        console.log('max', max)
        // 从叶子节点的子节点开始，标记到叶子节点+1
        // 比如[1,2,3,4,5] 递归到4开始
        // 4的left为null，right为null
        // Math.max(left, right)为0，返回给4的时候，4为第一层，Math.max(left, right) + 1
        return Math.max(left, right) + 1
    } else {
        return 0
    }
}
// @lc code=end

