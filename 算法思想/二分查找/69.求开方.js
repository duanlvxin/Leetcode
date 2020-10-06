/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0,r=x;
    while(l<r){
        let mid = l + Math.ceil((r-l)/2),temp=mid*mid;
        if(temp==x){
            return mid;
        }else if(temp<x){
            l = mid;
        }else if(temp>x){
            r = mid-1;
        }
    }
    return l;
};

var mySqrt = function(x) {
    if(x<=1){
        return x;
    }

    let l = 1, r = x;
    while(l<=r){
        let mid = l + Math.floor((r-l)/2),temp=mid*mid;
        if(temp==x){
            return mid;
        }else if(temp<x){
            l = mid + 1;
        }else if(temp>x){
            r = mid - 1;
        }
    }
    return r;
};