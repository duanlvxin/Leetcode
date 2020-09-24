/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;
    let dp = new Array(n); //表格有n行
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n); //每行有n列
    }
    let maxLen = 0;
    let ans = "";
    for (let l = 0; l < n; l++) {
        for (let i = 0; i < n; i++) {
            let j = i + l;
            if (j >= n) {
                break;
            }
            if (l == 0) {
                dp[i][j] = true;
            }
            else if (l == 1) {
                dp[i][j] = (s[i] == s[j]);
            } else {
                dp[i][j] = (dp[i + 1][j - 1]) && (s[i] == s[j]);
            }
            if (dp[i][j] && (l + 1 > maxLen)) {
                ans = s.slice(i, i + l + 1);
            }
        }
    }
    console.log(dp);
    return ans;
};

console.log(longestPalindrome("cbbd"));