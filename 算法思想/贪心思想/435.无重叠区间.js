/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[1]>b[1]){
            return 1;
        }else if(a[1]<b[1]){
            return -1;
        }else{
            return a[0]-b[0];
        }
    });
    let cnt = 0;
    for(let i=1;i<intervals.length;){
        if(intervals[i][0]<intervals[i-1][1]){
            cnt ++;
            intervals.splice(i,1);
        }else{
            i++;
        }
    }
    return cnt;
};


var eraseOverlapIntervals = function(intervals) {
    //按尾部排序
    intervals.sort((a,b)=>{
        if(a[1]>b[1]){
            return 1;
        }else if(a[1]<b[1]){
            return -1;
        }else{
            return a[0]-b[0];
        }
    });
    //用cnt记录不重叠的区间个数
    let cnt = 1, end = intervals[0][1];
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]>=end){
            end = intervals[i][1];
            cnt++;
        }
    }
    return intervals.length-cnt;
};
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));