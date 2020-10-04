/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if(len<=1){
        return 0;
    }

    let res = 0;
    for(let i=1;i<len;i++){
        if(prices[i]>prices[i-1]){
            res+=prices[i]-prices[i-1];
        }
    }
    return res;
};