/**
 * 对于一个数组每一个元素计算左边小于该元素的那些元素之和
 * 返回总和
 * 要求时间复杂度为O(nlogn),空间复杂度O(n)
 */
var mergeSort = function(nums, l, h){
    if(l>h){
        return [];
    }
    if(l==h){
        return [nums[l]];
    }
    const mid = l + parseInt((h-l)/2);
    const left = mergeSort(nums, l, mid);
    const right = mergeSort(nums, mid+1, h);
    return merge(left,right);
}

var merge = function(left, right){
    const i = 0,res=[];
    while(left.length && right.length){
        if(left[i]<right[i]){
            ans += left[i]*(right.length);
            res.push(left.shift());
        }else{
            res.push(right.shift());
        }
    }
    return res.concat(left).concat(right);
}

let ans = 0;
var minSum = function(nums){
    mergeSort(nums,0,nums.length-1);
    return ans;
}

console.log(minSum( [1, 3, 5, 2, 4, 6]));//27