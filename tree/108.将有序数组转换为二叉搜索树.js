/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    // 二分查找，利用中序遍历是BST的有序数组，定义边界
    if (nums.length === 0) return null
    const index = Math.floor(nums.length / 2) // root值
    const root = new TreeNode(nums[index])
    const left = nums.slice(0, index) // 左边界
    const right = nums.slice(index + 1, nums.length) // 右边边界
    root.left = sortedArrayToBST(left)
    root.right = sortedArrayToBST(right)
    return root
};
// @lc code=end

