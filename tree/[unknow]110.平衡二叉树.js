/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    // 这题其实不是很懂
    const balanced = (node) => {
        if (!node) {
            return 0;
        }
        const left = balanced(node.left); // 后序遍历 左边高度
        const right = balanced(node.right); // 右边高度
        // 只要左右两边对比超过1，就把这个根节点的总高度返回-1 flag代表错误
        // 只要左右两边某个子树为-1，就一路都是-1
        if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        return Math.max(left, right) + 1;
    }
    return balanced(root) !== -1
};
// @lc code=end

