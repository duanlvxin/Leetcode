/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    //与边界上的'O'相连的'O'用'T'替换，之后再变回'O'
    //其他的'O'直接用'X'替换

    if(!board || board.length===0 || board[0].length===0){
        return;
    }

    const m = board.length, n =board[0].length;
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    const dfs = function(board,i,j){
        if(i<0 || j<0 || i>=m || j>=n || board[i][j]!=='O'){
            return;
        }
        board[i][j] = 'T';
        for(let direction of directions){
            dfs(board,i+direction[0],j+direction[1]);
        }
    }

    for(let i=0;i<m;i++){
        dfs(board,i,0);
        dfs(board,i,n-1);
    }
    for(let j=0;j<n;j++){
        dfs(board,0,j);
        dfs(board,m-1,j);
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j]=='T'){
                board[i][j] = 'O';
            }else if(board[i][j] == 'O'){
                board[i][j] = 'X';
            }
        }
    }
};

let board = [["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]];
solve(board);
console.log(board);