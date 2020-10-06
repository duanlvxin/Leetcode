/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let len = people.length;
    if(len==0 || len==1){
        return people;
    }
    people.sort((a,b)=>{
        if(a[0]>b[0]){
            return -1;
        }else if(a[0]<b[0]){
            return 1;
        }else if(a[0]===b[0]){
            return a[1]-b[1];
        }
    })
    let res = [people[0]];
    for(let i=1;i<len;i++){
        res.splice(people[i][1],0,people[i]);
    }
    return res;
};