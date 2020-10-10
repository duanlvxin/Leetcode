/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board,word){
    const h = board.length, w = board[0].length;
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    const visited = new Array(h);
    for(let i=0;i<visited.length;i++){
        visited[i] = new Array(w).fill(false);
    }

    const check = (i,j,s,k)=>{
        if(board[i][j]!==s.charAt(k)){
            return false;
        }else if(k==s.length-1){
            return true;
        }
        //选择
        visited[i][j] = true;
        let result = false;
        //执行
        for(const [dx,dy] of directions){
            let newi = i+dx,newj = j+dy;
            if(newi>=0&&newi<h&&newj>=0&&newj<w){
                if(!visited[newi][newj]){
                    const flag = check(newi,newj,s,k+1);
                    if(flag){
                        result = true;
                        break;
                    }
                }
            }
        }
        //撤销
        visited[i][j] = false;
        return result;
    }
    for(let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            let flag = check(i,j,word,0);
            if(flag){
                return true;
            }
        }
    }
    return false;
}


var exist2 = function(board, word) {
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

    //找到一个就返回
    var search = function(x, y, word,board){
        if(word==''){
            return true;
        }
        board[x][y]='*';
        if(x+1<m&&board[x+1][y]==word[0]){
            if(search(x+1,y,word.slice(1),deepCopy(board))){
                return true;
            }
        }
        if(x-1>=0&&board[x-1][y]==word[0]){
            if(search(x-1,y,word.slice(1),deepCopy(board))){
                return true;
            }
        }
        if(y+1<n&&board[x][y+1]==word[0]){
            if(search(x,y+1,word.slice(1),deepCopy(board))){
                return true;
            }
        }
        if(y-1>=0&&board[x][y-1]==word[0]){
            if(search(x,y-1,word.slice(1),deepCopy(board))){
                return true;
            }
        }
        return false;
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

    console.log(startIndexs);
    let start = startIndexs.shift();
    while(start!=undefined){
        if(search(start[0],start[1],word.slice(1),deepCopy(board))){
            return true;
        }
        start = startIndexs.shift();
    }
    return false;
};

let board = [["C","A","A"],["A","A","A"],["B","C","D"]];
let word = 'AAB';
console.log(exist(board,word));