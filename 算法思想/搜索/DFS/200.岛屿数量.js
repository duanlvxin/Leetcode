/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid===null || grid.length===0 || grid[0].length===0){
        return 0;
    }

    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    const m = grid.length, n = grid[0].length;
    let cnt = 0;
    const dfs = function(grid,i,j){
        if(i<0||j<0||i>=m||j>=n||grid[i][j]===0){
            return 0;
        }
        grid[i][j] = 0;
        for(let direction of directions){
            dfs(grid,i+direction[0],j+direction[1]);
        }

        return 1;
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            cnt+=dfs(grid,i,j);
        }
    }
    return cnt;
};

let grid=[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]];
console.log(numIslands(grid));