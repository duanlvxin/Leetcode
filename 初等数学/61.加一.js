/**
 * 
 *  给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
    最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
    你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;
    if(n==1){
        if(digits[0]==9){
            return [1,0];
        }else{
            return [digits[0]+1];
        }
    }
    if(digits[n-1]<9){
        digits[n-1]+=1;
        return digits;
    }else{
        digits[n-1] = 0;
        return plusOne(digits.slice(0,n-1)).concat(digits[n-1]);
    }
};


var plusOne = function(digits) {
    let n = digits.length;
    for(let i=n-1;i>=0;i--){
        if(digits[i]==9){
            digits[i] = 0;
        }else{
            digits[i] += 1;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};