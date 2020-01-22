/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // 前序遍历找到根结点root
    // 找到root在中序遍历的位置 -> 左子树的长度和右子树的长度
    // 截取左子树的中序遍历、右子树的中序遍历
    // 截取左子树的前序遍历、右子树的前序遍历
    // 递归重建二叉树
    if (preorder.length === 0) {
        return null;
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0]);
    }
    const root = preorder[0] // 前序遍历找到根结点root 
    const index = inorder.indexOf(root) // 找到root在中序遍历的位置
    const leftLen = index + 1 // 左子树的长度
    // const rightLen = inorder.length - leftLen - 1 // 右子树的长度
    const inoLeft = inorder.slice(0, index) // 左子树的中序遍历
    const inoRight = inorder.slice(index + 1) // 右子树的中序遍历
    const preLeft = preorder.slice(1, leftLen) // 左子树的前序遍历
    const preRight = preorder.slice(leftLen) // 右子树的前序遍历
    const node = new TreeNode(root)
    node.left = buildTree(preLeft, inoLeft)
    node.right = buildTree(preRight, inoRight)
    return node
};
// @lc code=end

