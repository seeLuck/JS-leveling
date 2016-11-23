/**
 * @param {number[]} nums
 * @return {number}
 */
/**我的
 * 很简单的题,注意一下索引和数组长度的控制。第一次不小心写了个死循环。
 */
var removeDuplicates1 = function(nums) {
    var len = nums.length;
    if(!len)
            return 0;
    for(var i=0;i<len-1;i++){
        if(nums[i]==nums[i+1]){
            nums.splice(i,1);
            i--;len--;
        }
    }
    return nums.length;
};

/**官方答案
 * 采用了双index玩,是个很有意思的思路,速度快了一点,可以借鉴一下。
 */
var removeDuplicates2 = function(nums) {
    var len = nums.length;
    if(!len)
        return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};