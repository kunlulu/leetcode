/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root, array = []) {
    // 后序遍历：遍历左子树–>遍历右子树–>访问根;
    if (root) {
        // 遍历左子树
        postorderTraversal(root.left, array)
        // 遍历右子树
        postorderTraversal(root.right, array)
        // 访问根
        array.push(root.val)
    }
    return array
};
// @lc code=end

