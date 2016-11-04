/**
 * @param {string} s
 * @return {number}
 */

/**
 * 10分钟一遍过,查一下罗马字符与数字对应的关系即可。
 * http://literacy.kent.edu/Minigrants/Cinci/romanchart.htm
 */
var romanToInt = function(s) {
    var hash = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    if(s.length==1){
        return hash[s];
    }

    var arr = s.split('');
    var ans = 0;
    for(var i=0;i<arr.length-1;i++){
        if(hash[arr[i]]<hash[arr[i+1]]){
            ans-=hash[arr[i]];
        }else{
            ans+=hash[arr[i]];
        }
    }
    ans+=hash[arr[arr.length-1]];
    return ans;
};

console.log(romanToInt('XL'))