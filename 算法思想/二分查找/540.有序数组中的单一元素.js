/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0,right = nums.length-1;
    while(left<right){
        mid = left + Math.floor((right-left)/2);
        if(nums[mid]!==nums[mid-1]&&nums[mid]!==nums[mid+1]){
            return nums[mid];
        }else if((nums[mid]===nums[mid-1]) && ((mid-left-1)&1)){
            right = mid - 2;
        }else if((nums[mid]===nums[mid-1]) && !((mid-left-1)&1)){
            left = mid + 1;
        }else if((nums[mid]===nums[mid+1]) && ((right-mid-1)&1)){
            left = mid + 2;
        }else if((nums[mid]===nums[mid+1]) && !((right-mid-1)&1)){
            right = mid-1;
        }
    }
    return nums[left];
};

var singleNonDuplicate = function(nums) {
    let left = 0,right = nums.length-1;
    while(left<right){
        mid = left + Math.floor((right-left)/2);
        if(mid&1){
            mid--;
        }
        if(nums[mid]==nums[mid+1]){
            left = mid + 2;
        }else{
            right = mid;
        }
    }
    return nums[left];
};

let arr = [9981,9981,9982,9982,9983,9983,9984,9984,9985,9986,9986,9987,9987,9988,9988,9989,9989,9990,9990,9991,9991,9992,9992,9993,9993,9994,9994,9995,9995,9996,9996,9997,9997,9998,9998,9999,9999];
console.log(singleNonDuplicate(arr))