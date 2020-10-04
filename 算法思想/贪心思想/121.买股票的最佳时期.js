/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===0||prices.length===1){
        return 0;
    }

    let max=0,premin = prices[0];
    for(let i=1;i<prices.length;i++){
        if(premin<prices[i]){
            max = Math.max(prices[i]-premin,max);
        }else{
            premin = prices[i];
        }
    }
    return max;
};