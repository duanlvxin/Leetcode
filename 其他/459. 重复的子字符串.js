/**
 * @param {string} s
 * @return {boolean}
 */
function isZhiShu(num){
    if(num==2){
        return true;
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
var repeatedSubstringPattern = function(s) {
    let n = s.length;
    if(n==1){
        return false;
    }
    if(s==s[0].repeat(n)){
        return true;
    }
    if(isZhiShu(n)){
        return false;
    }else{
        for(let i=2;i<n;i++){
            if(n%i!=0){
                continue;
            }else{
                if(s==s.slice(0,i).repeat(n/i)){
                    return true;
                }
            }
        }
        return false;
    }
};


//优解
/*假设母串S由子串a+b组成，则(S+S)=a+b+a+b，掐头去尾，
  则开头的a和最后的b无法匹配，相当于(S+S)[1:-1] = c+b+a+d ，其中c!=a, d!=b，如果a+b在其中出现，则必然有a=b
*/
var repeatedSubstringPattern = function(s) {
    return (s+s).slice(1,-1).indexOf(s)!='-1';
};
