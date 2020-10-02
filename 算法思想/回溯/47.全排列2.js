/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var isSame = function(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }

    let temp1 = [...arr1];
    let temp2 = [...arr2];
    for(let i=0,n=temp1.length;i<n;i++){
        if(temp1[i]!=temp2[i]){
            return false;
        }
    }
    return true;
}
var clean = function(res){
    for(let i=0;i<res.length-1;i++){
        for(let j=i+1;j<res.length;j++){
            if(isSame(res[i],res[j])){
                res.splice(j--,1);
            }
        }
    }
}

var permuteUnique = function(nums) {
    let res = [];
    let len = nums.length;

    function f(nums,temp=[]){
        let n = nums.length;
        if(temp.length==len){
            res.push(temp);
            return;
        }

        for(let i=0;i<n;i++){
            let savedNums = [...nums];
            let savedTemp = [...temp];

            temp.push(nums[i]);
            nums.splice(i,1);
            f(nums,temp);

            nums = [...savedNums];
            temp = [...savedTemp];
        }
    }

    f(nums);
    clean(res);
    return res;
};




/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let n = nums.length;

    function f(temp=[],visited=[]){
        if(temp.length==n){
            res.push(temp);
            return;
        }

        for(let i=0;i<n;i++){
            if(visited[i]) continue;
            if(i>0&&nums[i]==nums[i-1]&&!visited[i-1]) continue;
            //保证[1,1,2,3]中两个1的排列是相同的，一定是nums[0],nums[1]这样的顺序
            //https://leetcode-cn.com/problems/permutations-ii/solution/47-quan-pai-lie-iiche-di-li-jie-pai-lie-zhong-de-q/
            visited[i] = true;

            temp.push(nums[i]);
            f([...temp],[...visited]);

            temp.pop();
            visited[i] = false;
        }
    }

    nums.sort((a,b)=>a-b);
    f();
    return res;
};