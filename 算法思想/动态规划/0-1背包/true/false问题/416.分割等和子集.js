/**
 * 数组中是否和为sum/2的组合--->超时
 * @param {number[]} nums
 * @return {boolean}
 */
var findTarget = function(nums,target){
    if(target==0){
        return true;
    }
    for(let i=0,n=nums.length;i<n;i++){
        let temp = [...nums];
        temp.splice(i,1);
        if(findTarget(temp,target-nums[i])){
            return true;
        }
    }
    return false;
}
var canPartition = function(nums) {
    let sum = 0, len = nums.length;
    for(let i=0;i<len;i++){
        sum += nums[i];
    }
    
    if(sum&1){
        return false;
    }
    return findTarget(nums,sum/2);
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0, len = nums.length;
    for(let i=0;i<len;i++){
        sum += nums[i];
    }
    
    if(sum&1){
        return false;
    }
    
    let dp = new Array(sum/2+1).fill(false),target = sum/2;
    dp[0] = true;
    for (const num of nums) {
        for (let j = target; j >= num; --j) {
            dp[j] |= dp[j - num];
        }
    }
    return dp[sum/2];
};