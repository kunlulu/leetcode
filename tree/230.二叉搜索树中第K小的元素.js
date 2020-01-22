/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    if (k === 0) return null
    // 来一遍中序遍历 
    const inorder = (r, a = []) => {
        if (r) {
            inorder(r.left, a)
            a.push(r.val)
            inorder(r.right, a)
        }
        return a
    }
    // 因为是BST，所以中序遍历得到按大小排序的数组
    const arrayMap = inorder(root) // [1,2,3,4]
    return arrayMap[k - 1]
};
// @lc code=end

