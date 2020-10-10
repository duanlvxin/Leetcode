/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
    //注意不能直接初始化成['....','....','....','....']，否则后续无法修改其中的值
    function initChess(n) {
        let chess = [];
        for (let i = 0; i < n; i++) {
            chess[i] = []
            for (let j = 0; j < n; j++) {
                chess[i][j] = '.';
            }
        }
        return chess;
    }

    function isValid(x, y, chess) {
        let n = chess.length;
        for (let i = 0; i < x; i++) {
            if (chess[i][y] == 'Q') {
                return false;
            }
        }

        for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
            if (chess[i][j] == 'Q') {
                return false;
            }
        }

        for (let i = x - 1, j = y + 1; i >= 0 && j < n; i--, j++) {
            if (chess[i][j] == 'Q') {
                return false;
            }
        }

        return true;
    }

    function solve(chess, row, temp) {
        if (row == chess.length) {
            let ans = [];
            for (let i = 0, len = temp.length; i < len; i++) {
                ans[i] = temp[i].join("");
            }
            res.push(ans);
            return;
        }

        for (let i = 0, len = chess.length; i < len; i++) {
            if (isValid(row, i, temp)) {
                temp[row][i] = 'Q';
                solve(chess, row + 1, temp);
                temp[row][i] = '.';
            }
        }
    }
    let chess = initChess(n);
    let res = [];
    let temp = [...chess];
    solve(chess, 0, temp);
    return res;
};

console.log(solveNQueens(4));