/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numOfZeroOne = function(str){
    let numOfZero = 0, numOfOne = 0;
    for(let i=0,n=str.length;i<n;i++){
        if(str[i]==0){
            numOfZero += 1;
        }else if(str[i]==1){
            numOfOne += 1;
        }
    }
    return [numOfZero, numOfOne];
}
var findMaxForm = function(strs, m, n) {
    let dp = [];
    for(let i=0;i<=m;i++){
        dp[i] = new Array(n+1).fill(0);
    }
    dp[0][0] = 0;
    for(let str of strs){
        let [numOfZero, numOfOne] = numOfZeroOne(str);
        for(let i=m;i>=numOfZero;i--){
            for(let j=n;j>=numOfOne;j--){
                dp[i][j] = Math.max(dp[i-numOfZero][j-numOfOne]+1,dp[i][j]);
            }
        }
    }
    return dp[m][n];
};

console.log(findMaxForm( ["10", "0001", "111001", "1", "0"],5,3))