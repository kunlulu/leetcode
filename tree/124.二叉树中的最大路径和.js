/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let ans = 0 // 设置一个变量储存结果

const ms = (root) => {
    if (!root) return 0
    // 后序遍历
    const left = Math.max(0, ms(root.left)) // 节点如果是负数，就选择0
    const right = Math.max(0, ms(root.right))
    ans = Math.max(ans, left + right + root.val) // ans和当前节点总和做对比，暂存
    // 符合题意：当前节点只能有选择一个子节点，不能两个都选
    return Math.max(left, right) + root.val
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    if (!root) return 0
    ans = root.val // 根节点可能是负数，因此不取0
    ms(root)
    return ans
};
// @lc code=end

