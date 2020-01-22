/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    return helper(root, sum)
};

var helper = (root, sum, arr = [], solution = []) => {
    if (!root || root.val === null) return []
    // 找到后再push进arr中，直接返回
    if (!root.left && !root.right && sum === root.val) {
        arr.push([...solution, sum])
        return arr
    }
    // 前序遍历，先放到子数组里去
    solution.push(root.val)
    helper(root.left, sum - root.val, arr, solution)
    helper(root.right, sum - root.val, arr, solution)
    // 遍历完后仍然没有找到路径
    // 把solution撤回到上一个solution，来让他从找root下另外一颗子树
    solution.pop()
    return arr
}
// @lc code=end

