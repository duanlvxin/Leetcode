/**优化空间 二维变一维*/
var maxSumDivThree = function(nums) {
    let dp = [0,-Infinity,-Infinity];
    for(let item of nums){
        dp2 = [0,0,0];
        for(let i=0;i<3;i++){
            dp2[(i+item)%3] = Math.max(dp[(i+item)%3],dp[i]+item);
        }
        dp = dp2;
    }
    return dp[0];
};
console.log(maxSumDivThree([3,6,5,1,8]));