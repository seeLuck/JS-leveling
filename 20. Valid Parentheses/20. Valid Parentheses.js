/**
 * @param {string} s
 * @return {boolean}
 */
var left = ['(','[','{'];
var right = [')',']','}'];
var arr = [];

var isValid = function(s) {
    var strArr = s.split('');
    for(var i=0;i<strArr.length;i++){
        if(left.indexOf(strArr[i])>-1){
            arr.push(strArr[i]);
        }else if(right.indexOf(strArr[i])>-1){
            if(left.indexOf(arr.pop())!=right.indexOf(strArr[i])){
                return false;
            }
        }
    }
    return !arr.length
};

console.log(isValid(']'))