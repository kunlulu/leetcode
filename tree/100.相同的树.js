/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true // 两个数都为空，相等
    if (!p) return !q // 两个数中一个数为空，则判断另一个数是否为空
    if (!q) return !p
    if (p.val != q.val) return false // 两个值都有值，不同 不相等
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) // 两个值都为true返回true
};
// @lc code=end

