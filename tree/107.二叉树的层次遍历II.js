/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root, arr = [], level = 0) {
    if (root) {
        levelOrderBottom(root.left, arr, level + 1)
        levelOrderBottom(root.right, arr, level + 1)
        if (root.val !== null) {
            // 后续遍历也可以获得层次遍历
            if (arr[level] && arr[level].length !== 0) {
                arr[level].push(root.val)
            } else {
                arr[level] = [[root.val]]
            }
        }
    }
    if (!level) return arr.reverse() // 所有遍历完成后，level就是0
    return arr
};
// @lc code=end

