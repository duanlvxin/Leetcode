/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(matrix===null || matrix.length===0 || matrix[0].length===0){
        return [];
    }

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    const m = matrix.length, n = matrix[0].length;
    const dfs = function(matrix, i, j, can){
        can[i][j] = true;

        for(let direction of directions){
            let nextX = i + direction[0], nextY = j + direction[1];
            if(nextX>=0 && nextX<m && nextY>=0 && nextY<n && matrix[nextX][nextY]>=matrix[i][j] && !can[nextX][nextY]){
                dfs(matrix,nextX,nextY,can);
            }
        }
    }

    let res = [], canA = new Array(m), canB = new Array(m);
    for(let i=0;i<m;i++){
        canA[i] = new Array(n).fill(false);
        canB[i] = new Array(n).fill(false);
    }
    
    for(let i=0;i<m;i++){
        dfs(matrix,i,0,canA);
        dfs(matrix,i,n-1,canB);
    }
    for(let j=0;j<n;j++){
        dfs(matrix,0,j,canA);
        dfs(matrix,m-1,j,canB)
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(canA[i][j] && canB[i][j]){
                res.push([i,j]);
            }
        }
    }
    return res;
};


let matrix = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
console.log(pacificAtlantic(matrix));