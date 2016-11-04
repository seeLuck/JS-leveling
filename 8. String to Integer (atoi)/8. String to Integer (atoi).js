/**
 * @param {string} str
 * @return {number}
 */

/**
 * 讲实话这题挺2的,唯一的亮点就是当字母e的特殊意义
 * 其他几个+号几个-号几个空格的规定都是题目自己内定的,所以这题做了1个小时,提交了20遍才过,leetcode上此题的通过率是超低的13.8%
 * 经历了这个蛋疼的题目后,我决定今年过大年之前刷完所有easy难度的题,明年就能向中等难度的题进军。
 */
var myAtoi = function(str) {
    str = str.replace(/e/ig,'a');
    var arr = str.split('')
    var counts = 0;
    var flag = false;
    for(var a=0;;a++){
        //console.log(a,arr[a],Number(arr[a]))
        if(!arr.length){
            break;
        }

        if(flag&&arr[a]==' ')
            return 0;

        if(arr[a]!=' '&&arr[a]!='+'&&arr[a]!='-'){
            break;
        }

        if(arr[a]=='+'){
            counts++;
            if(!flag)
                flag = !flag;
        }else if(arr[a]=='-'){
            counts--;
            if(!flag)
                flag = !flag;
        }
        if(Math.abs(counts)==2)
                return 0;
        arr.shift();
        a--;

    }
    //console.log(arr)
    //var tempNum = parseFloat(arr.join(''));

    if(isNaN(parseFloat(arr.join(''))))
            return 0;
    if(flag&&counts==0)
            return 0;
    if(arr.join('')=='')
            return 0;
    if(counts>0){
        arr.unshift('+')
    } else if(counts<0){
        arr.unshift('-')
    }
    if(parseFloat(arr.join(''))>Math.pow(2,31)-1)
            return Math.pow(2,31)-1;
    else if(parseFloat(arr.join(''))<1<<31){
            return 1<<31
    }
    return parseFloat(arr.join(''))
};

console.log(myAtoi(" - 321"))
