/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if(!grid || grid.length===0 || grid[0].length===0){
        return 0;
    }

    var findStartIndex = function(grid){
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j]){
                    return [i,j];
                }
            }
        }
        return [-1,-1];
    }

    var dfs = function(grid,startX,startY){
        grid[startX][startY] = 0;cnt++;
        for(let direction of directions){
            let nextX = startX + direction[0];
            let nextY = startY + direction[1];
            if(nextX>=0 && nextX<m && nextY>=0 && nextY<n && grid[nextX][nextY]){
                dfs(grid,nextX,nextY);
            }
        }
    }

    const directions = [[0,-1],[0,1],[1,0],[-1,0]];
    const m = grid.length, n = grid[0].length;
    let [startX,startY] = findStartIndex(grid);
    let max=0,cnt=0;
    while(startX!==-1 && startY!==-1){
        dfs(grid,startX,startY);
        max = Math.max(max,cnt);
        cnt = 0;
        [startX,startY] = findStartIndex(grid);
    }

    return max;
};

var maxAreaOfIsland = function(grid){
    if(!grid || grid.length===0 || grid[0].length===0){
        return 0;
    }
    const directions = [[0,-1],[0,1],[1,0],[-1,0]];
    const m = grid.length, n = grid[0].length;
    let max = 0;
    const dfs = function(grid,i,j){
        if(i<0||j<0||i>=m||j>=n||grid[i][j]===0){
            return 0;
        }

        let area = 1;
        grid[i][j] = 0;
        for(let direction of directions){
            area += dfs(grid,i+direction[0],j+direction[1]);
        }
        return area;
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            max = Math.max(max,dfs(grid,i,j));
        }
    }
    return max;
}
let grid = [[1,0,1],[1,1,0]];
console.log(maxAreaOfIsland(grid));