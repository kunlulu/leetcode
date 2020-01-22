/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root, array = [], level = 0) {
    // 我的实现：用的前序遍历
    if (root) {
        if (level === 0) array[level] = [root.val] // 第一层
        level = level + 1 // 当前层数+1
        if (root.left || root.right) {
            const levelArray = array[level] || []
            if (root.left && root.left.val !== null) {
                levelArray.push(root.left.val)
            }
            if (root.right && root.right.val !== null) {
                levelArray.push(root.right.val)
            }
            if (levelArray.length) {
                array[level] = levelArray
            }
            levelOrder(root.left, array, level)
            levelOrder(root.right, array, level)
        }
    }
    return array
};
// @lc code=end

