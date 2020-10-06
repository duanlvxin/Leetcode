/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1, mid,res=[];
    while(l<r){
        mid = l + Math.floor((r-l)/2);
        if(nums[mid]<target){
            l = mid + 1;
        }else if(nums[mid]>target){
            r = mid - 1;
        }else{
            r = mid;
        }
    }
    (nums[r]==target)&&res.push(r);

    r = nums.length - 1;
    while(l<r){
        mid = l + Math.ceil((r-l)/2);
        if(nums[mid]<target){
            l = mid + 1;
        }else if(nums[mid]>target){
            r = mid - 1;
        }else{
            l = mid;
        }
    }

    (nums[r]==target)&&res.push(r);

    return res.length>0?res:[-1,-1];
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var binarySearch = function(nums,l,r,target,flag){
    let mid;
    while(l<r){
        if(flag){
            mid = l + Math.floor((r-l)/2);
        }else{
            mid = l + Math.ceil((r-l)/2);
        }
        if(nums[mid]<target){
            l = mid + 1;
        }else if(nums[mid]>target){
            r = mid - 1;
        }else{
            if(flag){
                r = mid;
            }else{
                l = mid;
            }
        }
    }

    return r;
}

var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1, res=[];
    //第一个位置
    l = binarySearch(nums,l,r,target,true);
    (nums[l]==target)&&res.push(l);

    //最后一个位置
    r = binarySearch(nums,l,nums.length - 1,target,false);
    (nums[r]==target)&&res.push(r);

    return res.length>0?res:[-1,-1];
};

console.log(searchRange([0.1,0.1,0.1,0.2,3,3],0.1))