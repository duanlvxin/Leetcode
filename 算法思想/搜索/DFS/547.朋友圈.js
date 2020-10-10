/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    if(M===null || M.length === 0 || M[0].length===0){
        return 0;
    }

    const n = M.length;
    let visited = new Array(n).fill(false),circleNum = 0;
    const dfs = function(M,i,visited){
        visited[i] = true;
        for(let j=0;j<n;j++){
            if(M[i][j] && !visited[j]){
                dfs(M,j,visited)
            }
        }
    }
    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(M,i,visited);
            circleNum++;
        }
    }
    return circleNum;
};