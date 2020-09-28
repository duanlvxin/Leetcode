/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const findIndex = function(arr,target){
        //找出arr中小于等于target的值的下标。
        let res = [];
        for(let i=0,n=arr.length;i<n;i++){
            if(arr[i]<=target){
                res.push(i);
            }
        }
        return res;
    }

    let sum = 0;
    for(let i=0,n=worker.length;i<n;i++){
        let indexs = findIndex([...difficulty],worker[i]);
        if(indexs.length!==0){
            let max = profit[indexs.pop()];
            while(indexs.length!==0){
                let temp = profit[indexs.pop()];
                if(temp>max){
                    max = temp;
                }
            }
            sum += max;
        }
    }
    return sum;
};

//排序做法
var maxProfitAssignment = function(difficulty, profit, worker) {
    let work = []
    for(let i=0,n=difficulty.length;i<n;i++){
        work.push([difficulty[i],profit[i]]);
    }
    work.sort((a,b)=>a[0]-b[0]);

    let sum = 0;
    for(let i=0,n=worker.length;i<n;i++){
        const target = worker[i];
        let max = 0;
        for(let j=0,len=work.length;j<len;j++){
            if(work[j][0]<=target && work[j][1]>max){
                max = work[j][1];
            }
            if(work[j][0]>target){
                break;
            }
        }
        sum += max;
    }
    return sum;
};