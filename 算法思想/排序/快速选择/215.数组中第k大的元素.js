/**
 * 在数组 nums 的子区间 [l,h] 执行 partition 操作，返回 nums[l] 排序以后应该在的位置
 * @param {number[]} nums 
 * @param {number} l 
 * @param {number} h 
 */
const partition = function(nums,l,h){
    let pivot = nums[l],j=l;
    for(let i=l+1;i<=h;i++){
        if(nums[i]<pivot){
            j++;
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }
    [nums[j],nums[l]] = [nums[l],nums[j]];
    return j
}

/**
 * 找出数组中第k大的数字
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    let l = 0,h = nums.length-1;
    while(l<h){
        let index = partition(nums,l,h);
        if(index==k){
            break;
        }else if(index<k){
            l = index+1;
        }else{
            h = index-1;
        }
    }
    return nums[k];
};


const partition2 = function(nums,l,h){
    let i=l+1,j=h;
    while(i<j){
        while(nums[i]<=nums[l]){i++;}
        while(nums[j]>nums[l]){j--;}
        [nums[i],nums[j]] = [nums[j],nums[i]];
        i++;j--;
    }
    [nums[l],nums[j]] = [nums[j],nums[l]];
    return j;
}

console.log(partition([5,4,10,1,0,11,100,2,4,9,33,-1,3,4,1,512,4],0,16));
console.log(partition2([5,4,10,1,0,11,100,2,4,9,33,-1,3,4,1,512,4],0,16));