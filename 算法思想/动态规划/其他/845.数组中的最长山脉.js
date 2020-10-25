/**
 * 动态规划
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let len = A.length;
    if(len<3){
        return 0;
    }

    let left = new Array(len).fill(0),right = new Array(len).fill(0);
    for(let i=1;i<len;i++){
        if(A[i]>A[i-1]){
            left[i] = left[i-1]+1;
        }
    }

    for(let j=len-2;j>=0;j--){
        if(A[j]>A[j+1]){
            right[j] = right[j+1]+1;
        }
    }
    
    let max = 0;
    for(let i=1;i<=len-2;i++){
        if(left[i]>=1&&right[i]>=1){
            max = Math.max(max,left[i]+right[i]+1);
        }
    }

    return max;
};



/**
 * 双指针
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let len = A.length;
    if(len<3){
        return 0;
    }

    let left = 0,right, max = 0;
    while(left+2<len){
        right=left+1;
        while(right<len&&A[right]>A[right-1]){
            right++;
        }

        if(right!=left+1){
            if(right==len){
                break;
            }else{
                if(A[right-1]!=A[right]){
                    while(right<len&&A[right-1]>A[right]){
                        right++;
                    }
                    max = Math.max(max,right-left);
                }
            }
            left=right-1;
        }else{
            left = right;
        }
    }
    return max;
};