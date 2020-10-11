/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m<=0 || n<=0){
        return 0;
    }

    let grid = new Array(m);
    for(let i=0;i<m;i++){
        grid[i] = new Array(n).fill(0);
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(j==0){
                grid[i][j] = 1;
            }else if(i==0){
                grid[i][j] = 1;
            }else{
                grid[i][j] += grid[i-1][j]+grid[i][j-1];
            }
        }
    }

    return grid[m-1][n-1];
};


//优化空间
var uniquePaths = function(m, n) {
    if(m<=0 || n<=0){
        return 0;
    }

    let dp = new Array(n).fill(1);
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            //dp[j]是向下，dp[j-1]是向右，两种选择相加
            dp[j] = dp[j] + dp[j-1];
        }
    }

    return dp[n-1];
};

//或者相当于机器人总共移动的次数 S=m+n-2，向下移动的次数 D=m-1，那么问题可以看成从 S 中取出 D 个位置的组合数量，这个问题的解为 C(S, D)。
//C(s,d)=s!/(d!*(s-d)!)