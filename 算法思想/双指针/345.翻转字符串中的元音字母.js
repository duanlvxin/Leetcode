/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = {'a':true, 'e':true, 'i':true, 'o':true, 'u':true, 'A':true, 'E':true, 'I':true, 'O':true, 'U':true};
    let i = 0, len = s.length, j = len - 1,arr = s.split("");
    while(true){
        while(!vowels[s[i]]&&i<len){
            i++;
        }
        while(!vowels[s[j]]&&j>=0){
            j--;
        }
        if(i>=j){
            break;
        }
        //交换
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;j--;
    }
    return arr.join("");
};