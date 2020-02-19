/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 利用对象key: value来存储key: index
    const obj = new Map()
    for (let index = 0; index < nums.length; index++) {
        // 算出要寻找的数
        const element = target - nums[index];
        if (obj.has(element)) { // >=0 判断 index为0的情况，如果不写=0，会被认定为false
            // 要找的数已经记录过了，说明那个数在前面
            // 直接返回
            return [obj.get(element), index]
        }
        // 没找到的话就先把key: index记录下来
        obj.set(nums[index], index)
    }
};
// @lc code=end

