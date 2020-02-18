/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start

const helper = (s1, s2, cal) => {
    switch (cal) {
        case '+': return s1 + s2
        case '-': return s1 - s2
        case '*': return s1 * s2
        // 逆波兰要求除法只保留整数位
        // ceil() 方法执行的是向上取整计算，它返回的是大于或等于函数参数，并且与之最接近的整数。
        // Math.ceil(-5.1) 和 Math.ceil(-5.9) 都返回-5
        case '/': return (s1 / s2) <= 0 ? Math.ceil(s1 / s2) : Math.floor(s1 / s2)
    }
}
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    for (let index = 0; index < tokens.length; index++) {
        if (['+', '-', '*', '/'].includes(tokens[index])) {
            const s1 = stack.pop()
            const s2 = stack.pop()
            // 除法的话应该是前面除掉后面，所以s1,s2换个位置
            const res = helper(Number(s2), Number(s1), tokens[index])
            stack.push(res)
        } else {
            stack.push(tokens[index])
        }
    }
    return stack.pop()
};
// @lc code=end

