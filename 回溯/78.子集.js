/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**********回溯版 ***************/
var subsets = function(nums) {
    let res = [],t=[];
    let n = nums.length;
    const dfs = (cur)=>{
        if(cur==n){
            res.push(t.slice());
            return;
        }

        t.push(nums[cur]);
        dfs(cur+1);
        t.pop();
        dfs(cur+1);
    }
    dfs(0);
    return res;
};

/**********递归版 ***************/
var subsets = function(nums) {
    let res = [[]];
    let n = nums.length;

    function f(res,nums,n){
        if(n==0){
            return res;
        }
        if(n==1){
            res.push([nums[0]]);
            return res;
        }

        let temp = f(res,nums,n-1);
        for(let i=0,len=temp.length;i<len;i++){
            let item = [...res[i]];
            item.push(nums[n-1]);
            res.push(item);
        }
        return res;
    }

    return f(res,nums,n);
};

/**********非递归版 ***************/
var subsets = function(nums) {
    let res = [[]];
    for(let i=0,n=nums.length;i<n;i++){
        res.forEach((e)=>{
            res.push(e.concat(nums[i]));
        })
    }
    return res;
};