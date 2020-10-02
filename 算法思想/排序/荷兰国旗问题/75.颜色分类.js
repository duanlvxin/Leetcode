/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 荷兰国旗包含三种颜色：红、白、蓝。
有三种颜色的球，算法的目标是将这三种球按颜色顺序正确地排列。
它其实是三向切分快速排序的一种变种，
在三向切分快速排序中，每次切分都将数组分成三个区间：小于切分元素、等于切分元素、大于切分元素，
而该算法是将数组分成三个区间：等于红色、等于白色、等于蓝色。 
 */
var sortColors = function(nums) {
    let p1 = 0, p2 = nums.length - 1,cur = 0;
    while(cur<=p2){
        if(nums[cur]==0){
            [nums[cur],nums[p1]] = [nums[p1],nums[cur]];
            cur ++;
            p1 ++;
        }else if(nums[cur]==2){
            [nums[cur],nums[p2]] = [nums[p2],nums[cur]];
            p2 --;
        }else{
            cur ++;
        }
    }
};