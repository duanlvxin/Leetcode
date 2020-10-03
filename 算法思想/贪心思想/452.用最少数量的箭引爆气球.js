/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length==0){
        return 0;
    }
    points.sort((a,b)=>{
        if(a[1]>b[1]){
            return 1;
        }else if(a[1]<b[1]){
            return -1;
        }else{
            return a[0]-b[0];
        }
    });
    for(let i=1;i<points.length;){
        if(points[i][0]<=points[i-1][1]){
            points.splice(i,1);
        }else{
            i++;
        }
    }
    return points.length;
};

var findMinArrowShots = function(points) {
    if(points.length==0){
        return 0;
    }
    points.sort((a,b)=>{
        if(a[1]>b[1]){
            return 1;
        }else if(a[1]<b[1]){
            return -1;
        }else{
            return a[0]-b[0];
        }
    });
    let cnt = 1,end=points[0][1];
    for(let i=1;i<points.length;i++){
        if(points[i][0]>end){
            cnt++;
            end = points[i][1];
        }
    }
    return cnt;
};

let points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]];
console.log(findMinArrowShots(points));