/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this._stack = []
    return this
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this._stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this._stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    // 栈顶实际就是数组最后一个元素
    const len = this._stack.length
    return len > 0 ? this._stack[len - 1] : 0
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return Math.min(...this._stack)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

