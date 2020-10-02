/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
//使用回溯都会超出时间限制
var wordBreak = function(s, wordDict) {
    let res = [];
    let S = s;

    const include = function(arr, item){
        for(let i=0,n=arr.length;i<n;i++){
            if(arr[i]===item){
                return true;
            }
        }
        return false;
    }
    const helper = function(s, wordDict, temp=''){
        let len = s.length;
        if(len==0&&temp.split(" ").join("")==S){
            res.push(temp);
            return;
        }
        for(let i=0;i<len;i++){
            for(let j=i;j<len;j++){
                if(include(wordDict,s.slice(i,j+1))){
                    let savedTemp = temp;

                    if(temp===''){
                        temp += s.slice(i,j+1);
                    }else{
                        temp += " "+s.slice(i,j+1);
                    }

                    helper(s.slice(j+1),wordDict,temp);

                    temp = savedTemp;
                }
            }
        }
    }
    
    helper(s, wordDict);
    return res;
};

//剪枝
var wordBreak = function(s, wordDict) {
    let map = {};
    const word_break = function(s, wordDict, start){
        if(map[start]!==undefined){
            return map[start];
        }
        let res = [];
        if(start === s.length){
            res.push("");
        }
        for(let end = start+1;end<=s.length;end++){
            if(wordDict.includes(s.slice(start,end))){
                let list = word_break(s, wordDict, end);
                for(let item of list){
                    res.push(s.slice(start,end)+(item===""?"":" ")+item);
                }
            }
        }
        map[start] = res;
        return res;
    }

    return word_break(s,wordDict,0);
};

//使用动态规划,(空间不足)
var wordBreak = function(s, wordDict){
    let dp = new Array(s.length+1);
    dp[0] = [""];
    for(let i=1;i<=s.length;i++){
        let list = [];
        for(let j=0;j<i;j++){
            if(dp[j]&& dp[j].length && wordDict.includes(s.slice(j,i))){
                for(let item of dp[j]){
                    list.push(item+((item==="")?"":" ")+s.slice(j,i));
                }
            }
        }
        dp[i] = list;
    }
    return dp[s.length];
}

console.log(wordBreak("pineapplepenapple",["apple", "pen", "applepen", "pine", "pineapple"]))