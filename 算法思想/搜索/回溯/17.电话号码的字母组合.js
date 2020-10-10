/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const backTrace = function(digits,s=''){
        if(digits==''){
            res.push(s);
            return;
        }

        for(let item of map[digits[0]]){
            s += item;
            backTrace(digits.slice(1),s);
            s = s.substring(0,s.length-1);
        }
    }

    if(!digits || digits.length===0){
        return [];
    }
    let map = {'1':[],'2':['a','b','c'],'3':['d','e','f'],
    '4':['g','h','i'],'5':['j','k','l'],'6':['m','n','o'],
    '7':['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z']};
    let res = [];
    backTrace(digits);
    return res;
};

console.log(letterCombinations('23'));