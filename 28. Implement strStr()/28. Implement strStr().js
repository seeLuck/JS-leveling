/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/**
 * 这题正则就搞定。
 */
var strStr = function(haystack, needle) {
    var reg = new RegExp(needle);
    return haystack.search(reg);
};