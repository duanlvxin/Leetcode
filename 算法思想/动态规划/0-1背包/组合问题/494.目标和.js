/**
 * 枚举
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var calculate = function(nums, sum, i, target){
        if(i==nums.length && sum==target){
            count++;
            return;
        }else if(i==nums.length && sum!==target){
            return;
        }
        calculate(nums,sum+nums[i], i+1, target);
        calculate(nums,sum-nums[i], i+1, target);
    }

    let count = 0;
    calculate(nums, 0, 0, S);
    return count;
};

var findTargetSumWays = function(nums, S) {
    if(nums===null || nums.length==0){
        return 0;
    }

    const len = nums.length,sum = nums.reduce((a,b)=>a+b);
    if(S>sum){
        return 0;
    }

    let dp = [];
    for(let i=0;i<len;i++){
        dp[i] = new Array(2*sum+1).fill(0); 
    }
    dp[0][nums[0] + sum] = 1;dp[0][-nums[0] + sum] += 1;
    for(let i=1;i<len;i++){
        for(let j=-sum;j<=sum;j++){
            if(j-nums[i]+sum>=0 && j+nums[i]<=sum){
                dp[i][j+sum] = dp[i-1][j-nums[i]+sum] + dp[i-1][j+nums[i]+sum];
            }
        }
    }
    return dp[len-1][S+sum];
};
console.log(findTargetSumWays([0,0,0,0,0,1],1));