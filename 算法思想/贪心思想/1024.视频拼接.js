/**
 * 贪心
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    if(clips===null){
        return -1;
    }

    clips.sort((a,b)=>{
        if(b[1]>a[1]){
            return 1;
        }else if(b[1]<a[1]){
            return -1;
        }else{
            return a[0]-b[0];
        }
    });

    let pre = T;
    let cnt = 0,i=0;
    while(i<clips.length){
        let min = Infinity;
        if(clips[i][1]<pre){
            return -1;
        }
        while(i<clips.length&&clips[i][1]>=pre){
            if(clips[i][0]<min){
                min = clips[i][0]; 
            }
            i++;
        }
        if(min==0){
            return ++cnt;
        }else{
            cnt++;
            pre = min;
        }
    }
    return -1;
};


/**
 * 优化的贪心算法
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var myVideoStitching = function(clips, T) {
    let maxn = new Array(T).fill(0);
    for(let clip of clips){
        if(clip[0]<T){
            maxn[clip[0]] = Math.max(maxn[clip[0]],clip[1]);
        }
    }

    let pre = 0, last = 0, res = 0;
    for(let i=0;i<T;i++){
        last = Math.max(last,maxn[i]);//扩展能到达的最右边的坐标
        if(i==last){
            return -1;
        }
        if(i==pre){
            res ++;
            pre = last;
        }
    }
    return res;
};

/**
 * 动态规划
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    let dp = new Array(T+1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for(let i=1;i<=T;i++){
        for(let clip of clips){
            if(clip[0]<i && i<=clip[1]){
                dp[i] = Math.min(dp[i],dp[clip[0]]+1);
            }
        }
    }
    return dp[T]==Number.MAX_SAFE_INTEGER?-1:dp[T];
};
