/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    // 后序遍历找到根结点root
    // 找到root在中序遍历的位置 -> 左子树的长度和右子树的长度
    // 截取左子树的中序遍历、右子树的中序遍历
    // 截取左子树的后序遍历、右子树的后序遍历
    // 递归重建二叉树
    // 中序遍历 inorder = [9,3,15,20,7]
    // 后序遍历 postorder = [9,15,7,20,3]
    if (!postorder || !postorder.length) return null
    if (postorder.length === 1) return new TreeNode(postorder[0])
    const root = postorder[postorder.length - 1]
    const index = inorder.indexOf(root) // 1
    const rightLen = inorder.length - 1 - index // 右子树长度 3
    const leftLen = inorder.length - 1 - rightLen // 左子树 1
    const inoLeft = inorder.slice(0, leftLen)  // 左子树的中序遍历
    const inoRight = inorder.slice(leftLen + 1) // 右子树的中序遍历
    const poLeft = postorder.slice(0, leftLen) // 左子树的后序遍历
    const poRight = postorder.slice(leftLen, postorder.length - 1) // 右子树的后序遍历
    const node = new TreeNode(root)
    node.left = buildTree(inoLeft, poLeft)
    node.right = buildTree(inoRight, poRight)
    return node
};
// @lc code=end

