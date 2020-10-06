/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let len = nums.length,cnt=0;
    for(let i=0;i<len-1;i++){
        if(nums[i]>nums[i+1]){
            cnt++;
            if(i-1<0){
                nums[i] = nums[i+1];
            }else if(nums[i-1]<=nums[i+1]){
                nums[i] = nums[i-1];
            }else{
                nums[i+1] = nums[i];
            }
        }
        if(cnt>=2){
            return false;
        }
    }
    return true;
};

console.log(checkPossibility([3,4,2,3]))