/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // 先定义两个指针指向链表头部
    let pA = headA, pB = headB
    // 比如相交节点为8
    // [4,1,8,4,5]
    // [5,0,1,8,4,5]
    while (pA !== pB) {
        // 先遍历自己的链表到底，再遍历对方的列表
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
        // pA = 4,1,8,4,5,5,0,1,8
        // pB = 5,0,1,8,4,5,4,1,8
    }
    // 返回任意一个就可以
    return pA
};
// @lc code=end

