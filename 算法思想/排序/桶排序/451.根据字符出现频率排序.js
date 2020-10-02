/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    for(let item of s){
        if(map[item]==undefined){
            map[item] = 1;
        }else{
            map[item] += 1;
        }
    }

    let buckets = [];
    for(let key in map){
        let cnt = map[key];
        if(buckets[cnt]==undefined){
            buckets[cnt] = [key];
        }else{
            buckets[cnt].push(key);
        }
    }

    let res = ''
    for(let i=buckets.length-1;i>=0;i--){
        if(buckets[i]==undefined){
            continue;
        }
        for(let item of buckets[i]){
            res+=item.repeat(i);
        }
    }
    return res;
};