var decodeString = function(str) {
    let stack = [],res = '',multi = 0;
    for(let i=0,n=str.length;i<n;i++){
        if(str[i]=='['){
            stack.push([multi,res]);
            multi = 0;
            res = '';
        }else if(str[i]==']'){
            [last_multi,last_res] = stack.pop();
            res = last_res + res.repeat(last_multi);
        }else if(str[i]>='0'&&str[i]<='9'){
            multi = multi*10 + Number(str[i]);
        }else{
            res += str[i];
        }
    }
    return res;
};

console.log(decodeString("3[a]2[b4[F]c]"))