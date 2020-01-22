/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
    const isBST = (r, min, max) => {
        if (!r) {
            return true
        }
        if (r) {
            if (min) {
                if (min.val >= r.val) return false
            }
            if (max) {
                if (max.val <= r.val) return false
            }
            const left = isBST(r.left, min, r)
            const right = isBST(r.right, r, max)
            return left && right
        }
    }
    return isBST(root, null, null)
};
// @lc code=end

