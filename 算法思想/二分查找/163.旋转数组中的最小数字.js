/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0,r = nums.length - 1,m;
    while(l<r){
        m = l + Math.floor((r-l)/2);
        if(nums[m]<=nums[r]){
            r = m;
        }else{
            l = m+1;
        }
    }
    return nums[l];
};