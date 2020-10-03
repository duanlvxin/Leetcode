/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if(g.length==0||s.length==0){
        return 0;
    }
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let i=0,j=0,len1=g.length,len2=s.length;
    while(i<len1 && j<len2){
        if(g[i]<=s[j]){
            i++;
        }
        j++;
    }
    return i;
};