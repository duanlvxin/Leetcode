/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    const isValid = function(str1,str2){
        let i=0,j=0,len1=str1.length,len2=str2.length;
        while(i<=len1){
            if(j==len2){
                return true;
            }
            if(str1[i]===str2[j]){
                i++;j++;
            }else{
                i++;
            }
        }
        return false;
    }
    d.sort((a,b)=>{
        if(b.length>a.length){
            return 1;
        }else if(b.length<a.length){
            return -1;
        }else if(b.length==a.length){
            if(a<b){
                return -1;
            }else if(a==b){
                return 0;
            }else if(a>b){
                return 1;
            }
        }
    });
    for(let i=0,n=d.length;i<n;i++){
        if(isValid(s,d[i])){
            return d[i];
        }
    }
    return "";
};