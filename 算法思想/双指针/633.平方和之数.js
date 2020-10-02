/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let i = 0,j = Math.floor(Math.sqrt(c));
    while(i<=j){
        let mul = i**2+j**2;
        if(mul === c){
            return true;
        }else if(mul < c){
            i++;
        }else if(mul > c){
            j--;
        }
    }
    return false;
};