/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(target==0){
        return [];
    }

    let res = [];
    var dfs = function(target, temp, cur){
        if(target==0){
            res.push(temp);
            return;
        }
        let min = Math.min(...candidates.slice(cur));
        if(min>target){
            return;
        }
       
        //选当前这个
        if(candidates[cur]<=target){
            dfs(target-candidates[cur],[...temp,candidates[cur]],cur);
        }
        
        //不选当前这个
        dfs(target,[...temp],cur+1);
    }
    dfs(target, [], 0);
    return res;
};