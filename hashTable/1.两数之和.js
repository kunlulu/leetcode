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
    
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     // 必须要用map来做，obj不能用number做key，因此以下判断不成立
//     // 获得的键值为 { \'2\': 0, \'7\': 1, \'11\': 2 }，不是number
//     if (Object.keys(obj).includes(target - nums[i])) {
//       console.log("obj", obj);
//       return [obj[target - nums[i]], i];
//     }
//     obj[nums[i]] = i;
//   }
};
// @lc code=end

