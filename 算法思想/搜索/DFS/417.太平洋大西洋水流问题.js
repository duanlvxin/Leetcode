/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var deepCopy = function(arr){
    let newArr = [];
    for(let i=0,n=arr.length;i<n;i++){
        if(Array.isArray(arr[i])){
            newArr[i] = deepCopy(arr[i]);
        }else{
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

var pacificAtlantic = function(matrix) {
    if(matrix===null || matrix.length===0 || matrix[0].length===0){
        return [];
    }

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    const m = matrix.length, n = matrix[0].length;
    const dfs = function(matrix, i, j, endX, endY,visited){
        if(i==endX && j==endY){
            return true;
        }

        visited[i][j] = true;
        for(let direction of directions){
            let nextX = i + direction[0], nextY = j + direction[1];
            if(nextX>=0 && nextX<m && nextY>=0 && nextY<n && matrix[nextX][nextY]<=matrix[i][j] && !visited[nextX][nextY]){
                if(dfs(matrix,nextX,nextY,endX,endY,deepCopy(visited))){
                    return true;
                }
            }
        }
        return false;
    }

    let res = [], visited = new Array(m);
    for(let i=0;i<m;i++){
        visited[i] = new Array(n).fill(false);
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(dfs(matrix,i,j,m-1,n-1,deepCopy(visited))){
                res.push([i,j]);
            }
        }
    }
    return res;
};

let matrix = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
console.log(pacificAtlantic(matrix));