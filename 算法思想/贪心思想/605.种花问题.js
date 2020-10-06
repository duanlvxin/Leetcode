/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length;
    if(n==0){
        return true;
    }else if(n==1&&len==1&&flowerbed[0]==0){
        return true;
    }else if(n==1&&len==1&&flowerbed[0]==1){
        return false;
    }
    if(n>len){
        return false;
    }

    //求相邻的0的对数
    let cnt = 0,i=0;
    flowerbed.unshift(0);len+=1;
    while(i<len){
        while(flowerbed[i]==1&&i<len){
            i++;
        }
        if(i==len){
            break;
        }
        if(i+2<len&&flowerbed[i+1]==0&&flowerbed[i+2]==0){
            cnt++;
            flowerbed[i+1] = 1;
        }else if(i+2>=len){
            if(i+1<len&&flowerbed[i+1]==0){
                cnt++;
                flowerbed[i+1] = 1;
            }else if(i+1>=len){
                break;
            }
        }
        i+=2;
    }
    
    if(cnt>=n){
        return true;
    }else{
        return false;
    }
};

var canPlaceFlowers = function(flowerbed, n) {
    const len = flowerbed.length;
    let i = 0,cnt=0;
    while(i<len){
        if((flowerbed[i]==0) && (i==0||flowerbed[i-1]==0) && (i==len-1||flowerbed[i+1]==0)){
            cnt++;
            flowerbed[i] = 1;
        }
        if(cnt>=n){
            break;
        }
        i++;
    }
    return cnt>=n;
};

console.log(canPlaceFlowers([1,0,0,0,0,1],2));