/**
 * @param {string[]} strs
 * @return {string}
 */

/**我的
 * 这题没做出来,首先题目的意思一开始我理解得就有点偏差,最长公共前缀,在字符串非空的情况下这个前缀依然可能为空,有不少种情况要排除,提交失败后发现之前写的逻辑已经很难改了。
 * 思路是做个方法比较两个字符串的公共前缀,返回这个前缀和前缀的长度,然后遍历传入的数组去执行这个方法,取到最长的那个前缀。
 * 我这个思路是肯定可以走通的,鉴于是上班时挤时间做题,还是节约时间抱着学习的目的去学习更好的方法吧。
 */

/**高手的
 * 看了高手的答案我是醉得不行,原来我对题目理解的偏差,差得还不是一点点,原来在一个常规的input数组里,所有字符串都是共有单独一个前缀的,而不是我想的那样在一批公共前缀里选最长的那个。
 * 这样的话思路就非常简单了,先选出前缀的最大可能长度,再去比较每一个字符串,只要有不同就立刻返回结果。
 *
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';

    var len = strs.reduce(function(pre, item) {
        return Math.min(pre, item.length);
    }, Number.MAX_VALUE);

    var ans = '';
    for (var i = 0; i < len; i++) {
        var a = strs[0][i];
        var f = strs.every(function(item) {
            return item[i] === a;
        });

        if (!f) break;
        ans += a;
    }

    return ans;
};

console.log(longestCommonPrefix(['a','a','ab','abc']))