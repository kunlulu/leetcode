/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (43.66%)
 * Likes:    446
 * Dislikes: 0
 * Total Accepted:    136.2K
 * Total Submissions: 311.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let index = digits.length - 1; index >= 0; index--) {
    digits[index] = digits[index] + 1; // 先进位
    digits[index] = digits[index] % 10; // 取10的余数，比如9+1余数为0，继续，5+1余数不为0，停止
    if (digits[index] != 0) return digits; // 对于一般非9结尾的数字这里就可以返回
  }
  // 接下来9，99，999等特殊需要补1的数字
  digits.unshift(1);
  return digits;
};
// @lc code=end
