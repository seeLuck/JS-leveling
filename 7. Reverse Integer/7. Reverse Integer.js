/**
 * @param {number} x
 * @return {number}
 */

/**我的
 * 在JS里是很简单的一道题,算法没啥好说的。
 */
var reverse1 = function(x) {
    var str = String(x);
    var ans;
    if(x<0){
        str = str.replace('-','');
        ans = Number('-'+handler(str));
    }else{
        ans = Number(handler(str));
    }
    if(ans<-Math.pow(2,31)||Math.pow(2,31)-1<ans){
        return 0;
    }else {
        return ans;
    }
};

function handler(str){
    var a = [];
    for(var i=0;i<str.length;i++){
        a[i] = str[str.length-1-i]
    }
    return a.join('');
}


/**高手的
 * 用了数组的shift()方法代替了裁剪了负号（我在想这里是不是可以改进写循环把有可能的多个负号裁掉)
 * 直接使用了reverse()方法翻转了数组
 */
var reverse2 = function(x) {
    var minn = - (1 << 30) * 2;
    var maxn = (1 << 30) * 2 - 1;
    var ans;
    var arr = x.toString().split('');
    if (x < 0)
        arr.shift();  // remove '-'
    ans = Number(arr.reverse().join(''));
    if (x < 0)
        ans *= -1;
    console.log(minn, maxn)
    if (ans < minn || ans > maxn)
        return 0;
    else
        return ans;
};


/**总结
 * 这题的考点其实已经被JS的语言特性给避开了,所以第一次提交没过
 * 1 翻转以0结尾的数时,JS的Number方法直接就首位的0给去掉了
 * 2 JS玩家很容易忽略的数据边界问题。对于32位整数来说范围是-2^31~2^31-1。（32个0被归为0,1+31个零被归为-2^31,所以是这个范围）
 *   在JS里整数边界为MAX_VALUE,小数边界为MIN_VALUE,不过要注意JS里的位运算不能超过32位
 *   比如说1<<30代表2的30次方,但是1<<31会把1顶到符号位,显示的就是最小整数,再往上就会overflow了。
 */