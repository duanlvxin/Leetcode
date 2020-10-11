/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if(coins===null){
        return 0;
    }

    let len = amount.length;
    let dp = new Array(amount+1).fill(0);
    dp[0] = 1;
    for(let coin of coins){
        for(let i=1;i<=amount;i++){
            if(i>=coin){
                dp[i] += dp[i-coin];
            }
        }
        
    }
    
    return dp[amount];
};