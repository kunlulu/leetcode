/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false
    const myMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let arr = []
    // 非偶数个则直接返回false
    for (let i = 0; i < s.length; i++) {
        if (!Object.keys(myMap).includes(s[i])) {
            // 压栈
            arr.push(s[i])
        } else {
            if (arr.includes(myMap[s[i]])) {
                // 出栈
                arr.pop()
            }
        }
    }
    return arr.length === 0
};
// @lc code=end

