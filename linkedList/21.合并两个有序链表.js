/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null
    if (!l1) return l2
    if (!l2) return l1
    // 有序
    if (l1.val > l2.val) {
        // 如果 l1 的 val 值更小，
        // 则将 l1.next 与排序好的链表头相接，l2 同理
        l2.next = mergeTwoLists(l1, l2.next)
        // 递归最终返回值
        return l2
    } else {
        l1.next = mergeTwoLists(l2, l1.next)
        return l1
    }
};
// @lc code=end

