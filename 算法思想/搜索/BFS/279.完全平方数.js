/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const generate = function(n){
        res = [];
        for(let i=1;i<=Math.floor(Math.pow(n,0.5));i++){
            res.push(i*i);
        }
        return res;
    }

    if(n<=0){
        return 0;
    }
    let squares = generate(n),queue = new Set([n]),cnt=0;
    while(queue.size){
        cnt ++;
        nextQueue = new Set();
        for(let num of queue){
            for(let item of squares){
                if(item>num){
                    break;
                }else if(item === num){
                    return cnt;
                }else if(item<num){
                    nextQueue.add(num - item);
                }
            }
        }

        queue = nextQueue;
    }
};