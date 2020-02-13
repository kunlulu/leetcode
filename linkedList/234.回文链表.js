/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const getHeadArray = (head, array) => {
    if (head) {
        array.push(head.val)
        getHeadArray(head.next, array)
    }
    return
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 根据测试用例，出现[]或[1]的情况为true
    if (!head || !head.next) return true
    let arr = []
    getHeadArray(head, arr) // 遍历拿到array
    const len = arr.length
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        if (item !== arr[len - index - 1]) return false // 头尾位置对应匹配
        if (index === Math.floor(len / 2)) return true // 后半段位置不再做校验
    }
};
// @lc code=end

