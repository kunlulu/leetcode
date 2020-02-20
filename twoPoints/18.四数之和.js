/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const res = []
    nums.sort((a, b) => a - b)
    // 固定前两个值
    for (let i = 0; i < nums.length - 3; i++) {
        //  防止第一个数重复 
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            // 防止第二个数重复 [0,0,0,0] target为0的情况需要j - i > 1
            if (j - i > 1 && nums[j] === nums[j - 1]) continue
            // 定义双指针
            let l = j + 1, r = nums.length - 1
            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r]
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    // 防止第三、四个数重复
                    while (nums[l] === nums[l + 1]) {
                        l++
                    }
                    while (nums[r] === nums[r - 1]) {
                        r--
                    }
                    l++
                    r--
                } else {
                    sum > target ? r-- : l++
                }
            }
        }
    }
    return res
};
// @lc code=end

