/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) return head
    const next = head.next
    // 一直递归下去，到链表末端
    const newHead = reverseList(next)
    // 由于递归，head为链表末端逐层往上
    // [1,2,3,4,5] newHead从5开始，head就是[4,3,2,1]
    next.next = head
    // 再把下一个节点给设为空[4]
    // 保证只返回单个节点值
    head.next = null
    return newHead
};
// @lc code=end

