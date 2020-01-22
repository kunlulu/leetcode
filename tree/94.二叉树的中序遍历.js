/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root, array = []) {
    // 中序遍历：遍历左子树–>访问根–>遍历右子树;
    if (root) {
        // 遍历左子树
        inorderTraversal(root.left, array)
        // 访问根
        array.push(root.val)
        // 遍历右子树
        inorderTraversal(root.right, array)
    }
    return array
};
// @lc code=end

