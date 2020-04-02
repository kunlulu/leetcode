/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (60.18%)
 * Likes:    540
 * Dislikes: 0
 * Total Accepted:    126.3K
 * Total Submissions: 209.8K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length === 1) return nums;
  // 双指针
  let l = 0,
    r = 0;
  while (r < nums.length && l <= r) {
    if (nums[r] !== 0) {
      const n = nums[l];
      nums[l] = nums[r];
      nums[r] = n;
      l++;
    }
    r++;
  }
  return nums;
};
// @lc code=end
