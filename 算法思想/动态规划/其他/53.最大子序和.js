/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    if(len==0){
        return 0;
    }
    let dp = new Array(len);
    dp[0] = nums[0];
    for(let i=1;i<len;i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i]);
    }
    return Math.max(...dp);
};