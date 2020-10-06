/**
 * @param {number[]} nums
 * @return {number}
 */
function Status(l,r,m,i){
    this.lsum = l;//左子区间的连续子数组最大和
    this.rsum = r;//右子区间的连续子数组最大和
    this.msum = m;//区间内连续子数组最大和
    this.isum = i;//数组和
}

function pushUp(l,r){
    const isum = l.isum + r.isum;
    const lsum = Math.max(l.lsum,l.isum+r.lsum);
    const rsum = Math.max(r.rsum,r.isum+l.rsum);
    const msum = Math.max(l.msum,r.msum,l.rsum+r.lsum);
    return new Status(lsum,rsum,msum,isum);
}

function getInfo(a,l,r){
    if(l===r){
        return new Status(a[l],a[l],a[l],a[l]);
    }

    const m = (l+r)>>1;
    const lsub = getInfo(a,l,m);
    const rsub = getInfo(a,m+1,r);
    return pushUp(lsub,rsub);
}

var maxSubArray = function(nums) {
    return getInfo(nums,0,nums.length-1).msum;
};