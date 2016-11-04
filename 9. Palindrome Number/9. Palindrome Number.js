/**
 * @param {number} x
 * @return {boolean}
 */

/**
 * 3分钟一遍过,注意负数不是回文和翻转后overflow的范围即可
 */
var isPalindrome = function(x) {
    if (x<0||x>Math.pow(2,31)-1)
            return false;
    var ans = Number(String(x).split('').reverse().join(''));
    if(ans>Math.pow(2,31)-1)
            return false;
    return ans==x;
};