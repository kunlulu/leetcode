/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root, array = []) {
    // 前序遍历：访问根–>遍历左子树–>遍历右子树;
    if (root) {
        // 访问根
        array.push(root.val)
        // 遍历左子树
        preorderTraversal(root.left, array)
        // 遍历右子树
        preorderTraversal(root.right, array)
    }
    return array
};
// @lc code=end

