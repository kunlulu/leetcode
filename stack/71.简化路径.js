/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const stack = []
    const arr = path.split('/')
    for (const item of arr) {
        // 空和当前目录不执行
        if (item === '' || item === '.') {
            continue
        } else if (item === '..') {
            // 上级目录，出栈
            stack.pop()
        } else {
            // 正常入栈
            stack.push(item)
        }
    }
    return '/' + stack.join('/')
};
// @lc code=end

