/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    for(let item of nums){
        if(map[item]==undefined){
            map[item] = 1;
        }else{
            map[item] += 1;
        }
    }

    let arr = [];
    for(let key in map){
        if(arr[map[key]]==undefined){
            arr[map[key]] = [key];
        }else{
            arr[map[key]].push(key);
        }
    }
    
    let res = [];
    for(let i=arr.length-1;i>=0&&res.length<k;i--){
        if(arr[i]==undefined){
            continue;
        }
        if(arr[i].length+res.length<=k){
            res.push(...arr[i]);
        }else{
            res.push(...(arr[i].slice(0,k-res.length)));
        }
    }
    return res;
};