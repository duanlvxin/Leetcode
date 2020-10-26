/**
 * O(n^2),O(1)
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function(nums) {
    if(!nums || nums.length==0){
        return [];
    }

    let res = [];
    for(let i=0;i<nums.length;i++){
        res[i] = 0;
        for(let j=0;j<nums.length;j++){
            if(nums[j]<nums[i]){
                res[i]++;
            }
        }
    }
    return res;
};


/**
 *  O(n^2),O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    if(!nums || nums.length==0){
        return [];
    }

   let temp = [...nums];
   temp.sort((a,b)=>a-b);
   let res = [];
   for(let i=0;i<nums.length;i++){
       res.push(temp.indexOf(nums[i]));
   }
   return res;
};


/**
 *  O(n^2),O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var partition = function(nums,index){
    let pivot = nums[index], len = nums.length;
    //换到最右边
    [nums[index],nums[len-1]] = [nums[len-1],nums[index]];
    let i = 0,j = 0;
    for(;i<len;i++){
        if(nums[i]<pivot){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            j++;
        }
    }
    [nums[j],nums[len-1]] = [nums[len-1],nums[j]];
    return j;
}
var smallerNumbersThanCurrent = function(nums) {
    if(!nums || nums.length==0){
        return [];
    }

    let res = [];
    for(let i=0;i<nums.length;i++){
        res.push(partition([...nums],i));
    }
    return res;
};

/**
 * O(nlogn),O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let data = [];
    const len = nums.length;

    for(let i=0;i<len;i++){
        data.push([nums[i],i]);
    }
    data.sort((a,b)=>a[0]-b[0]);

    let pre = -1, ret = [];
    for(let i=0;i<len;i++){
        if(pre==-1 || data[i][0]!=data[i-1][0]){
            pre = i;
        }
        ret[data[i][1]] = pre;
    }
    return ret;
};

var smallerNumbersThanCurrent = function(nums) {
    const cnt = new Array(101).fill(0);
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        cnt[nums[i]] += 1;
    }
    for (let i = 1; i <= 100; ++i) {
        cnt[i] += cnt[i - 1];
    }
    const ret = [];
    for (let i = 0; i < n; ++i) {
        ret.push(nums[i] ? cnt[nums[i] - 1] : 0);
    }
    return ret;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3,4.2]))