/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 *
 * https://leetcode-cn.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (58.65%)
 * Likes:    235
 * Dislikes: 0
 * Total Accepted:    31.4K
 * Total Submissions: 53.4K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 *
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4,
 * 2, 1, 1, 0, 0]。
 *
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 *
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let length = T.length;
  let res = new Array(length).fill(0);
  let stack = [];
  for (let i = 0; i < length; i++) {
    // 温度升高出栈，并循环判断出栈
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop(); // 拿到栈顶元素即索引
      res[index] = i - index; // 结果以栈顶元素为准 = 当前元素索引 - 栈顶索引
    }
    // 把索引压栈
    stack.push(i);
  }
  return res;
};
// @lc code=end
