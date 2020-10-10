/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n==0||n==1) return 1;
    var res = 0;
    for(let i=1;i<=n;i++){
        res += numTrees(i-1)*numTrees(n-i);
    }
    return res;
};


var numTrees = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1,dp[1] = 1;
    for(let i=2;i<=n;i++){
        for(let j=1;j<=i;j++){
            dp[i] += dp[j-1]*dp[i-j];
        }
    }
    return dp[n];
};