/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
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
    // 深度优先 + 分治
    if (!root) {
        return 0
    }
    // 左右都为空，深度+1
    if (!root.left && !root.right) {
        return 1
    }
    // 左树为空：右子树最小深度的最小值 + 1
    if (!root.left) {
        return 1 + minDepth(root.right)
    }
    // 右树为空：左子树最小深度 + 1
    if (!root.right) {
        return 1 + minDepth(root.left)
    }
    // 左右子树都不为空：左子树深度和右子树最小深度的最小值 + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};
// @lc code=end

