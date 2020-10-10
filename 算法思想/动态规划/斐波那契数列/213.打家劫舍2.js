/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums===null || nums.length===0){
        return 0;
    }

    const myRob = function(nums,start,end){
        let dp = [],pre2=0,pre1=0;
        for(let i=start;i<=end;i++){
            let cur = Math.max(pre1,pre2+nums[i]);
            pre2 = pre1;
            pre1 = cur;
        }
        return pre1;
    }
    let n = nums.length;
    if(n==1){
        return nums[0];
    }else{
        return Math.max(myRob(nums,1,n-1),myRob(nums,0,n-2))
    }
};