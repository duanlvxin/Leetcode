/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.dp = [];
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let len = this.nums.length;
    if(len==0){
        return 0;
    }
    this.dp.push(this.nums[0]);
    for(let i=1;i<len;i++){
        this.dp[i] = this.dp[i-1]+this.nums[i];
    }

    if(i==0){
        return this.dp[j];
    }else{
        return this.dp[j]-this.dp[i-1];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */