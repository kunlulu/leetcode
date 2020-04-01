/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (47.45%)
 * Likes:    253
 * Dislikes: 0
 * Total Accepted:    75.2K
 * Total Submissions: 158.6K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 示例 1:
 *
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 *
 *
 * 示例 2:
 *
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 *
 * 说明：
 *
 *
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 * 进阶:
 *
 *
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // hashmap
  let obj = {};
  let arr = [];
  for (let index = 0; index < nums1.length; index++) {
    const element = nums1[index];
    obj[element] = obj[element] ? obj[element] + 1 : 1;
  }
  for (let index = 0; index < nums2.length; index++) {
    const element = nums2[index];
    if (obj[element]) {
      if (obj[element] > 1) {
        obj[element] = obj[element] - 1;
      } else {
        delete obj[element];
      }
      arr.push(element);
    }
  }
  return arr;

  // 暴力循环
  //   let res = [];
  //   let arr = [],
  //     diffArr = [];
  //   // 选择数组小的遍历，在大的里面做查询操作
  //   if (nums1.length < nums2.length) {
  //     arr = nums1;
  //     diffArr = nums2;
  //   } else {
  //     arr = nums2;
  //     diffArr = nums1;
  //   }
  //   for (let index = 0; index < arr.length; index++) {
  //     const element = arr[index];
  //     diffArr.some((item, n) => {
  //       if (item === element) {
  //         res.push(element);
  //         // 防止重复，所以要修改原数组
  //         diffArr.splice(n, 1);
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  //   return res;
};
// @lc code=end
