/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = [];
    let arr = [];
    let cnt = 0;
    for(let i=0;i<n;i++){
        arr.push(i+1);
    }

    function all(arr,temp){
        let len = arr.length;
        if(len==1){
            temp += arr[0];
            res.push(temp);
            cnt ++;
            if(cnt==k){
                return res[k-1];
            }else{
                return;
            }
        }

        for(let i=0;i<len;i++){
            let saveArr = [...arr];
            let saveTemp = temp;
            let num = arr.splice(i,1);
            temp+=num;
            all(arr,temp);
            temp=saveTemp;
            arr = saveArr;
            if(cnt==k){
                return res[k-1];
            }
        }
    }
    
    return all(arr,'');
};


console.log(getPermutation(1,1));