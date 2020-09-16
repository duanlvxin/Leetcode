/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function isValid(row,col,k,board){
    for(let i=0;i<9;i++){
        if(board[row][i]==k){
            return false;
        }
        if(board[i][col]==k){
            return false;
        }
    }

    let startX = Math.floor(row/3) * 3;
    let startY = Math.floor(col/3) * 3;
    for(let i=startX;i<startX+3;i++){
        for(let j=startY;j<startY+3;j++){
            if(board[i][j]==k){
                return false;
            }
        }
    }

    return true;
}

function backTrace(board){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]!=='.'){
                continue;
            }else{
                for(let k=1;k<=9;k++){
                    if(isValid(i,j,k,board)){
                        board[i][j] = k.toString();
                        if(backTrace(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}
var solveSudoku = function(board) {
    backTrace(board);
};