/**
 * 双指针做法
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=0,j=0,len1=s.length,len2=t.length;
    while(i<len1 && j<len2){
        if(s[i]==t[j]){
            i++;
        }
        j++;
    }

    if(i==len1){
        return true;
    }else{
        return false;
    }
};


/**
 * 双指针做法
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index = -1;
    for(let c of s){
        index = t.indexOf(c,index+1);
        if(index==-1){
            return false;
        }
    }
    return true;
};

/**
 * 动态规划做法
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

};