/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    let res = [];

    for(let i=0,n=input.length;i<n;i++){
        const c = input[i];
        if(c=='+' || c=='-' || c=='*'){
            const left = diffWaysToCompute(input.substring(0,i));
            const right = diffWaysToCompute(input.substring(i+1));
            for(let item of left){
                for(let item2 of right){
                    switch(c){
                        case '+':res.push(item + item2);break;
                        case '-':res.push(item - item2);break;
                        case '*':res.push(item * item2);break;
                    } 
                }
            }
        }
    }
    if(res.length==0){
        res.push(Number(input));
    }
    return res;
};