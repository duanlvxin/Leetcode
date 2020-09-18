/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
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
    return res;
};



var permute2 = function(nums) {
    let res = [];
    let n = nums.length;

    function f(temp=[],visited=[]){
        if(temp.length==n){
            res.push(temp);
            return;
        }

        for(let i=0;i<n;i++){
            if(visited[i]) continue;
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

console.log(permute([1,2,3]));
console.log(permute2([1,2,3]));