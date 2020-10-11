/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid==null || grid.length==0 || grid[0].length==0){
        return 0;
    }

    const m = grid.length, n = grid[0].length;
    let dp = new Array(m);
    for(let i=0;i<m;i++){
        dp[i] = new Array(n).fill(0);
    }
    //第一排只能是往右边
    dp[0][0] = grid[0][0];
    for(let i=1;i<n;i++){
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }
    for(let i=1;i<m;i++){
        for(let j=0;j<n;j++){
            if(j==0){
                dp[i][j] = dp[i-1][j]+grid[i][j];
            }else{
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j];
            }
        }
    }
    return dp[m-1][n-1];
};


//优化空间
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid==null || grid.length==0 || grid[0].length==0){
        return 0;
    }

    const m = grid.length, n = grid[0].length;
    let dp = new Array(n).fill(0);
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(j==0){
                dp[j] = dp[j] + grid[i][j];
            }else if(i==0){
                dp[j] = dp[j-1]+grid[i][j];
            }else{
                dp[j] = Math.min(dp[j],dp[j-1]) + grid[i][j];
            }
        }
    }
    return dp[n-1];
};