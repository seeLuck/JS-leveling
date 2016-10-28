/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**我的
 * 很傻逼的双循环,两个相加然后比对目标
 */
var twoSum1 = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length-i-1;j++){
            if((nums[j]+nums[nums.length-i-1])==target){
                return [j,nums.length-i-1]
            }
        }
    }
};


/**高手的
 * tmp用来记录目标与数组中每一个数的差值
 * 把每个数当做一个新数组a的key,value为原数组的key
 * 每一次循环都会push一个新的数字进入新的数组a,所以从第二次循环开始才是真正的比对
 * 当tmp作为key存在于新数组a里时,返回此时的value即在原数组的key和正在比对的key即结果
 */
var twoSum2 = function(nums, target) {
    var a = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        var tmp = target - nums[i];
        if (a[tmp] !== undefined) return [a[tmp], i];
        a[nums[i]] = i;
    }
};


/**总结
 * 对于数字n相关的查找时,巧妙地运用了数组a[n]代表下标的特性
 */
