/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s,flag=0) {
    let len = s.length;
    if(flag>=2){
        return false;
    }
    if(len == 0){
        return true;
    }else if(len == 1){
        return true;
    }

    if(s[0] === s[len-1]){
        let temp = s.substring(1,len-1);
        return validPalindrome(temp,flag);
    }else{
        let temp =  s.substring(1);
        let temp2 = s.substring(0,len-1);
        return validPalindrome(temp,flag+1) || validPalindrome(temp2,flag+1);
    }
};


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const isPalindrome = function(s,i,j){
        while(i<j){
            if(s[i]!==s[j]){
                return false;
            }
            i++;j--;
        }
        return true;
    }

    for(let i=0,j=s.length-1;i<j;i++,j--){
        if(s[i]!==s[j]){
            return isPalindrome(s,i,j-1)||isPalindrome(s,i+1,j);
        }
    }
    return true;
};