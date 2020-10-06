/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let len = S.length;
    if(!len){
        return [];
    }

    let start = 0,index = S.lastIndexOf(S[start]),res=[];
    while(start<len){
        for(let i=start;i<index;i++){
            index = Math.max(S.lastIndexOf(S[i]),index);
        }
        res.push(index+1);
        start = index+1;
        index = S.lastIndexOf(S[start]);
    }

    if(res.length==0){
        return res;
    }else{
        let temp = res[0];
        for(let i=1;i<res.length;i++){
            res[i] = res[i] - temp;
            temp += res[i];
        }
        return res;
    }
    
};


var partitionLabels = function(S) {
    let last = new Array(26);
    for(let i=0,n=S.length;i<n;i++){
        last[S.charCodeAt(i)-'a'.charCodeAt(0)] = i;
    }

    let j=0, anchor=0, ans = [];
    for(let i=0,n=S.length;i<n;i++){
        j = Math.max(j,last[S.charCodeAt(i)-'a'.charCodeAt(0)]);
        if(i==j){
            ans.push(i-anchor+1);
            anchor = i+1;
        }
    }
    return ans;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))