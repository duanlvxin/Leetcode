/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid===null || grid.length===0 || grid[0].length===0){
        return -1;
    }

    const isValid = function(x,y){
        return x>=0 && y>=0 && x<m && y<n;
    }

    let directions = [[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];
    let queue = [[0,0]],cnt = 0,m=grid.length,n=grid[0].length;
    if(grid[0][0] || grid[m-1][n-1]){
        return -1;
    }
    while(queue.length!==0){
        cnt ++;
        let len = queue.length;
        for(let i=0;i<len;i++){
            let node = queue.pop();
            if(node[0]==m-1 && node[1]===n-1){
                return cnt;
            }

            for(let direction of directions){
                let x = node[0]+direction[0], y = node[1]+direction[1];
                if(isValid(x,y) && grid[x][y] == 0){
                    queue.unshift([x,y]);
                    grid[x][y] = 1;//每加入一个就置1
                }
            }
        }
    }

    return -1;
};
