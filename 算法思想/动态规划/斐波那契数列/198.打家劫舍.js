/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let pre2 = 0, pre1 = 0;
    for(let i=0,n=nums.length;i<n;i++){
        let cur = Math.max(pre2+nums[i],pre1);
        pre2 = pre1;
        pre1 = cur;
    }
    return pre1;
};