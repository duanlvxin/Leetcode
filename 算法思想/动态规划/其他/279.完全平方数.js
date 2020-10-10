/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const generate = function(n){
        res = [];
        for(let i=1;i<=Math.floor(Math.pow(n,0.5));i++){
            res.push(i*i);
        }
        return res;
    }

    let dp = new Array(n+1).fill(Infinity),squares = generate(n);
    dp[1] = 1;
    if(n<=0){
        return 0;
    }
    for(let i=2;i<=n;i++){
        for(let item of squares){
            if(item>i){
                break;
            }else if(item==i){
                dp[i] = 1;
            }else{
                dp[i] = Math.min(dp[i-item]+1,dp[i]);
            }
        }
    }

    return dp[n];
};