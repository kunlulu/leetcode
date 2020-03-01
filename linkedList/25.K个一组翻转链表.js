/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 常用的根据区间反转链表
const reverse = (a, b) => {
  let pre = null,
    cur = a,
    next = a;
  while (cur != b) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (head === null) return null;
  let a = head,
    b = head;
  // 只循环k个
  for (let i = 0; i < k; i++) {
    // 如果k不足，就保持原样，返回head
    if (b === null) return head;
    // b是终止条件
    b = b.next; // 如果[1,2,3,4,5] k=2, b = [3,4,5]
  }
  let newHead = reverse(a, b); // 拿到k个反转好的链表
  a.next = reverseKGroup(b, k); // 把所有长度连起来 a.next = [3,4,5]递归，直到筛出5
  return newHead;
};
// @lc code=end
