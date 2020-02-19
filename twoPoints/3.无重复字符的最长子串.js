/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map()
    let res = 0
    // 双指针+hashmap：右边界j找到相同字符，左边界i直接滑到上个相同字符右边
    for (let i = 0, j = 0; i < s.length; ++j) {
        // 当右边界大于length时，已经划到底
        if (j === s.length) return res
        // charAt() 方法可返回指定位置的字符
        if (map.has(s.charAt(j))) {
            // abca发现a有重复的，把i指针直接划到当前a位置[a]bc -> abc[a]
            i = Math.max(i, map.get(s.charAt(j)) + 1);
        }
        // abc[a] 当前a的最长res为bca j=3 i=1 所以为j-i+1 = 3 
        res = Math.max(j - i + 1, res);
        // 根据遍历的j指针造map {a:3,b:7,c:5}
        map.set(s.charAt(j), j);
    }
    return res
};
// @lc code=end

