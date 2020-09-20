/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function isSame(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }
    let n = arr1.length;
    arr1.sort();arr2.sort();
    for(let i=0;i<n;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}
function clean(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(isSame(arr[i],arr[j])){
                arr.splice(j--,1);
            }
        }
    }
    return arr;
}
var combinationSum2 = function(candidates, target) {
    let res = [];

    var f = function(candidates, target, temp, start){
        if(candidates.length==0){
            return [];
        }

        if(target==0){
            res.push(temp);
            return;
        }

        let min = Math.min(...candidates);
        if(min>target){
            return;
        }

        let n = candidates.length;
        for(let i=start;i<n;i++){
            if(candidates[i]<=target){
                temp.push(candidates[i]);   
                f([...candidates],target-candidates[i],[...temp],i+1);
                temp.pop();
            }
        }
    }

    f(candidates, target, [], 0);
    return clean(res);
};