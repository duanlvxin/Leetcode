/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//从尾开始遍历！
var merge = function(nums1, m, nums2, n) {
    let index1 = m-1,index2 = n-1,maxIndex = m+n-1;
    while(index1>=0 || index2>=0){
        if(index1<0){
            nums1[maxIndex--] = nums2[index2--];
        }else if(nums1[index1]<nums2[index2]){
            nums1[maxIndex--] = nums2[index2--];
        }else{
            nums1[maxIndex--] = nums1[index1--];
        }
    }
};