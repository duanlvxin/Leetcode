/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var findIndex = function(c){
        let res = [];
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(board[i][j]==c){
                    res.push([i,j]);
                }
            }
        }
        return res;
    }

    var deepCopy = function(arr){
        let res = [];
        let m = arr.length;
        let n = arr[0].length;
        for(let i=0;i<m;i++){
            res[i] = [];
            for(let j=0;j<n;j++){
                res[i][j] = arr[i][j];
            }
        }
        return res;
    }

    var search = function(x, y, word,board){
        if(word==''){
            return true;
        }
        board[x][y]='*';
        let a = false,b = false, c = false, d = false;
        if(x+1<m&&board[x+1][y]==word[0]){
            a = search(x+1,y,word.slice(1),deepCopy(board));
        }
        if(x-1>=0&&board[x-1][y]==word[0]){
            b = search(x-1,y,word.slice(1),deepCopy(board));
        }
        if(y+1<n&&board[x][y+1]==word[0]){
            c = search(x,y+1,word.slice(1),deepCopy(board));
        }
        if(y-1>=0&&board[x][y-1]==word[0]){
            d = search(x,y-1,word.slice(1),deepCopy(board));
        }
        if(a||b||c||d){
            return true;
        }else{
            return false;
        }
    }

    if(board==[[]]){
        return false;
    }

    let m = board.length;
    let n = board[0].length;
    let startIndexs = findIndex(word[0]);
    if(startIndexs.length==0){
        return false;
    }

    let start = startIndexs.shift();
    while(start!=undefined){
        if(search(start[0],start[1],word.slice(1),board)){
            return true;
        }
        start = startIndexs.shift();
    }
    return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = 'ABCCED';
console.log(exist(board,word));