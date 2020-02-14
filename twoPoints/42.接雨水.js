/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // 花花酱
    // 设定左右指针从头尾开始
    let l = 0, r = height.length - 1
    // 设置左右最大值和最后总和
    let max_l = height[l], max_r = height[r], ans = 0
    // 当左右指针碰到了就停止循环
    while (l < r) {
        if (max_l < max_r) {
            // 雨水凹槽=l最大值-当前的值height[l]
            ans += max_l - height[l]
            l = l + 1
            max_l = Math.max(max_l, height[l])
        } else {
            ans += max_r - height[r]
            r = r - 1
            max_r = Math.max(max_r, height[r])
        }
    }
    return ans
};
// @lc code=end

