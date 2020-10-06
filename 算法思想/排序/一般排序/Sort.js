/**
 * 归并排序递归版
 * @param {Array} array 
 */
function mergeSort(array,l=0,r=array.length-1){
    if(l>=r){
        return;
    }
    let mid = Math.floor((l+r)/2);
    mergeSort(array,l,mid);
    mergeSort(array,mid+1,r);
    merge(array,l,mid,r);
}

function merge(array,l,mid,r){
    let temp = [];
    let i = l, j = mid+1;
    while(i<=mid&&j<=r){
        if(array[i]<array[j]){
            temp.push(array[i]);
            i++;
        }else{
            temp.push(array[j]);
            j++;
        }
    }
    temp.push(...(array.slice(i,mid+1)));
    temp.push(...(array.slice(j,r+1)));
    for(let i=l;i<=r;i++){
        array[i] = temp[i-l];
    }
}

/**
 * 归并排序迭代版
 * @param {Array} array 
 */
function mergeSort2(arr){
    if(arr.length==1){
        return arr;
    }

    function merge(left, right){
        var result = [];
        while(left.length>0 && right.length>0){
            if(left[0]<right[0]){
                result.push(left.shift());
            }else{
                result.push(right.shift());
            }
        }
        return result.concat(left).concat(right);
    }
    
    let work = [], len=arr.length;
    for(let i=0;i<len;i++){
        work.push([arr[i]]);
    }
    if(len&1){
        work.push([]);len++;
    }
    
    for(let lim=len;lim>1;lim/=2){
        for(var j=0,k=0;k<lim;j++,k+=2){
            work[j] = merge(work[k],work[k+1]);
        }
        if(j&1){
            work[j] = [];
        }
    }
    return work[0];
}

/**
 * 快速排序
 * @param {Array} array 
 */
function qSort(array){
    if(array.length<=1){return array;}

    var pivotIndex = Math.floor(array.length/2);
    var pivot = array.splice(pivotIndex,1)[0];

    var left = [];
    var right = [];

    for(let i=0;i<array.length;i++){
        if(array[i]<pivot){
            left.push(array[i]);
        }
        else{
            right.push(array[i]);
        }
    }

    return qSort(left).concat([pivot],qSort(right));
}

const partition = function(nums,l,h){
    let pivot = nums[l],j=l;
    for(let i=l+1;i<=h;i++){
        if(nums[i]<pivot){
            j++;
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }
    [nums[j],nums[l]] = [nums[l],nums[j]];
    return j
}   

function qSort2(array,l=0,h=array.length-1){
    if(l<h){
        let index = partition(array,l,h);
        qSort2(array,l,index-1);
        qSort2(array,index+1,h);
    }
}

/**
 * 冒泡排序
 * @param {Array} array 
 */
function bubbleSort(array){
    var start = 0;
    for(let i=start;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                var temp;
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
        start--;
    }
    return array;
}


function bubbleSort2(array){
    for(let i=1;i<array.length;i++){
        for(let j=0;j<array.length-i;j++){
            if(array[j]>array[j+1]){
                var temp;
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}


/**
 * 插入排序
 * @param {Array} array 
 */
function insertSort(array){
    for(let i=1;i<array.length;i++){
        if(array[i]>array[i-1]){
            continue;
        }
        else{
            var j = i-1;
            while(j>=0 && array[j]>array[i]){
                j--;
            }
            var item = array.splice(i,1)[0];
            array.splice(j+1,0,item);
        }
    }
    return array;
}


/**堆排序 */
function buildHeap(arr){
    for(let i=Math.floor(arr.length-1/2);i>=0;i--){
        adjustHeap(arr,i,arr.length);
    }
}

function adjustHeap(arr,pos,len){
    var cur = arr[pos];
    var child = 2*pos+1;
    while(child<len){
        //取左右孩子节点中较大的那个
        if(child+1<len && arr[child]<arr[child+1]){
            child += 1;
        }
        //与父节点比较
        if(arr[pos]<arr[child]){
            arr[pos] = arr[child];
            //交换后将当前节点定位到子节点上
            pos = child;
            child = 2*pos+1;
        }
        else{
            break;
        }
        arr[pos] = cur;
    }
}

function HeapSort(arr){
    buildHeap(arr);//创建大顶堆;
    for(let i=arr.length-1;i>=0;i--){
        //最大值（0）放到末尾（两者交换）
        arr[i] = [arr[0],arr[0]=arr[i]][0];
        //调整最大堆
        adjustHeap(arr,0,i);
    }
    return arr;
}
console.log(bubbleSort([9,2,1,3,0,10,-2,9,-3,100]));
console.log(bubbleSort2([9,2,1,3,0,10,-2,9,-3,100]));
console.log("========================================");
console.log(qSort([9,2,1,3,0,10,-2,9,-3,100]));
console.log("========================================");
console.log(insertSort([9,2,1,3,0,10,-2,9,-3,100]));
console.log("=========================================");
console.log(HeapSort([9,2,1,3,0,10,-2,9,-3,100]));
console.log("=========================================");
arr = [9,2,1,3,0,10,-2,9,-3,100,0,6,9,99];
// mergeSort(arr);
// console.log(arr);
console.log(mergeSort2(arr));