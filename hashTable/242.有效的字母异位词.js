/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  if (s.length === 0) return true;
  const hash = new Map();
  // 字母异位词：两个字母中的相同字符的数量相等
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (hash.has(item)) {
      hash.set(item, hash.get(item) + 1);
    } else {
      hash.set(item, 1);
    }
  }
  for (let k = 0; k < t.length; k++) {
    const titem = t[k];
    if (hash.has(titem)) {
      hash.set(titem, hash.get(titem) - 1);
    }
  }
  return [...hash.values()].filter(v => v !== 0).length === 0;
};
// @lc code=end
