/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let p = new ListNode(null)
    p.next = head // 主要是为了防止n=链表长度的情况，所以从null开始
    let fast = p // 快指针
    let slow = p // 慢指针
    while (n !== 0) {
        fast = fast.next // 找到正数第n个节点时移动slow节点
        n--
    }
    while (fast.next !== null) {
        fast = fast.next // 双指针同时移动，直到快指针到低
        slow = slow.next
    }
    slow.next = slow.next.next // 跳过倒数第n个指针
    return p.next
};
// @lc code=end

