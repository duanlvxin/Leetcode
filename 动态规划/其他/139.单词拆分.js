/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var In = function(a,arr){
        for(let item of arr){
            if(a==item){
                return true;
            }
        }
        return false;
    }
    dp = [true];
    let n = s.length;
    for(let i=0;i<n;i++){
        dp.push(false);
    }
    for(let i=0;i<=n-1;i++){
        for(let j=i+1;j<=n;j++){
            if(dp[i]&&In(s.slice(i,j),wordDict)){
                dp[j] = true;
            }
        }
    }
    return dp[dp.length-1];
};