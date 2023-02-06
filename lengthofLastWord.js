/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let wordlength = 0

    for(let i = s.length-1; i >= 0; i--){
        if(s[i] === ' ' && wordlength > 0){
            return wordlength
        }
        else if(s[i] !== ' '){
            wordlength++
        }
    }
    return wordlength

};