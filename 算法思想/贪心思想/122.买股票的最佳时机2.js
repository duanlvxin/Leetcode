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

/**
 * 递增子区间
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if(len<=1){
        return 0;
    }

    let res = 0,start=0;
    for(let i=start;i<len-1;i++){
        for(var j=i+1;j<len;j++){
            if(prices[j]<prices[j-1]){
                break;
            }
        }
        if(j==i+1&&prices[j]<prices[i]){
            continue;
        }else{
            res += prices[j-1]-prices[i];
            i = j-1;
        }
    }
    return res;
};