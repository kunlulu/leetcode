/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    // 按照惯例判断根是否存在
    if (!root || root.val === null) return false
    if (root) {
        // 如果为叶子节点，且值为sum
        if (!root.left && !root.right && sum === root.val) return true
        // 减掉剩下需要加的数
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
    }
};
// @lc code=end

