/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**我的
 * 采用了上一题的双index,一次过。
 */
var removeElement1 = function(nums, val) {
    var len = nums.length;
    if(!len)
            return 0;
    var i = 0;
    for(var j=0;j<len;j++){
        if(nums[j]!=val){
            nums[i]=nums[j];
            i++;
        }
    }
    return i;
};

/**官方答案
 * 很屌的思路,这个答案是针对当val在数组中存在的次数很少时的代码,n--非常的巧妙。
 * 差别就是我的代码是在val!=num[i]时进行操作,这个方法是在val==num[i]时进行操作。
 */
var removeElement2 = function(nums, val) {
    var i = 0;
    var n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
};