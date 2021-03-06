/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/**
 * 题外:第二道题,很有成就感！一开始做这个题的时候感觉一头雾水,不过后面仔细分析了一下,动笔画了画逻辑,还是找到了解决办法。而且还战胜了那位高手的解法,速度快了一倍!
 * 说实话他的解法我没看得很明白,不过感觉不是很好就不贴出来了。后面到讨论里看了看有和我相似思路的,所以这个应该算是良好的解法吧~
 * 
 * 思路:首先要理解这个题,字符串走的是一个Z字形,可以想象成是在两个点之间往返跑,想到这里这个题就好做了。
 * numRows做一列数组,字符串相当于是从这一列从头到尾依次向每个数组中push进一个字母,到底后再反向（也就是从最后一个数组开始往前一个个push字母）
 * 比如说一个字符串长度为6,第123个字母就是正序push进前3个数组,第456个字母就是从第4个数组开始逆序push进第432个数组。
 *
 * flag是判断正逆序的标识,a是保存这一列数组的数组,要注意numRows==1的情况下,l也就是判断flag的依据会等于0,就会有问题,要单独处理。
*/
var convert = function(s, numRows) {
    if(numRows==1)
            return s;
    var flag = true;
    var l = numRows-1;
    var a = [];
    var str = '';
    for(var n=0;n<numRows;n++){
        a[n] = [];
    }
    for(var i=0,j=0;i<s.length;i++){
        a[j].push(s[i]);
        if(flag){
            j++
        }else{
            j--
        }
        if((i+1)%l==0)
                flag = !flag;
    }
    for(var k in a){
        str += a[k].join('');
    }
    return str;
};