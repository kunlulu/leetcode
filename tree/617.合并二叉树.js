/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (!t1 && !t2) return null
    if (!t1) return t2
    if (!t2) return t1
    let t = new TreeNode(t1.val + t2.val)
    // t1 t2都存在
    let left = mergeTrees(t1.left, t2.left)
    let right = mergeTrees(t1.right, t2.right)
    t.left = left
    t.right = right
    return t
};
// @lc code=end

