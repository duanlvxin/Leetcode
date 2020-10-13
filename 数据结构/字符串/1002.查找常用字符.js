/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    if(!A || A.length===0){
        return [];
    }

    const len = A.length;
    let arr = new Array(26);
    for(let i=0;i<26;i++){
        arr[i] = new Array(len).fill(0);
    }
    for(let i=0;i<len;i++){
        for(let c of A[i]){
            arr[c.charCodeAt(0)-'a'.charCodeAt(0)][i] ++;
        }
    }
    let res = [];
    for(let i=0;i<26;i++){
        let start = arr[i][0];
        if(!start){
            continue;
        }
        for(var j=1;j<len;j++){
            start = Math.min(start,arr[i][j]);
            if(start==0){
                break;
            }
        }
        if(j==len){
            for(let k=0;k<start;k++){
                res.push(String.fromCharCode(97+i));
            }
        }
    }
    return res;
};

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    if(!A || A.length===0){
        return [];
    }

    const len = A.length;
    let freq = new Array(26);
    let minFreq = new Array(26).fill(Number.MAX_SAFE_INTEGER);
    for(let i=0;i<len;i++){
        freq = freq.fill(0);
        for(let c of A[i]){
            freq[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
        }
        for(let i=0;i<26;i++){
            minFreq[i] = Math.min(minFreq[i],freq[i]);
        }
    }
    
    let res = [];
    for(let i=0;i<26;i++){
        if(minFreq[i]==0){
            continue;
        }
        for(let j=0;j<minFreq[i];j++){
            res.push(String.fromCharCode(97+i));
        }
    }

    return res;
};