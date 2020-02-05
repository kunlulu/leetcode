/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let newHead = new ListNode(null),
        prev = newHead, // 前一位
        curr = head; // 当前位
    newHead.next = head; // 给null链表加上next
    // 结束条件为链表结束
    while (curr) {
        // 找到值
        if (curr.val === val) {
            // 前一位本来是curr，现在跳过为curr.next
            prev.next = curr.next;
            // curr相当于curr.next.next
            curr = prev.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    // 跳过第一个null
    return newHead.next;
};
// @lc code=end

