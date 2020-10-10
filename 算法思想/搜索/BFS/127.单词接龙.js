/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)){
        return 0;
    }

    const diff = function(a,b){
        let cnt = 0,i=0,n=a.length;
        while(i<n){
            if(a[i]!==b[i]){
                cnt++;
            }
            i++;
        }
        return cnt;
    }

    let queue = [beginWord], len=queue.length,cnt=0;
    while(len!=0){
        cnt++;
        for(let k=0;k<len;k++){
            beginWord = queue.pop();
            if(beginWord==endWord){
                return cnt;
            }
            for(let i=0;i<wordList.length;i++){
                if(diff(wordList[i],beginWord)===1){
                    queue.unshift(wordList[i]);
                    wordList.splice(i--,1);
                }
            }
        }
        len = queue.length;
    }

    return 0;
};