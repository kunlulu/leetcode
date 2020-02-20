/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 先从小到大排序，便于双指针
    nums.sort((a, b) => a - b)
    const res = []
    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        if (e > 0) break // 跳出整个for循环，到return res
        if (i > 0 && e === nums[i - 1]) { // 处理第一个数的重复
            continue; // 跳出当前循环，到下一个i
        }
        // 双指针
        let l = i + 1, r = nums.length - 1
        while (l < r) {
            let sum = e + nums[l] + nums[r]
            if (sum === 0) {
                res.push([e, nums[l], nums[r]])
                while (nums[l] === nums[l + 1]) { // 处理第二个数的重复
                    l++;
                }
                while (nums[r] === nums[r - 1]) { // 处理第三个数的重复
                    r--;
                }
                l++;
                r--;
            } else {
                sum > 0 ? r-- : l++
            }
        }
    }
    return res
};
// @lc code=end

