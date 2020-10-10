/**
 * @param {string} leaves
 * @return {number}
 */
var isYellow = function(c){
    return Number(c==='y');
}

var isRed = function(c){
    return Number(c==='r');
}

var minimumOperations = function(leaves) {
    const len = leaves.length;
    let dp = new Array(len);
    for(let i=0;i<len;i++){
        dp[i] = new Array(3);
    }

    dp[0][0] = isYellow(leaves[0]);
    dp[0][1] = dp[0][2] = dp[1][2] = Number.MAX_SAFE_INTEGER;
    for(let i=1;i<len;i++){
        dp[i][0] = dp[i-1][0] + isYellow(leaves[i]);
        dp[i][1] = Math.min(dp[i-1][1],dp[i-1][0]) + isRed(leaves[i]);
        if(i>=2){
            dp[i][2] = Math.min(dp[i-1][1],dp[i-1][2]) + isYellow(leaves[i]);
        }
    }
    return dp[len-1][2];
};