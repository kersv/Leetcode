/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    if(s.length === 0) return true
    let i = 0
    let j = 0
    while (j < t.length){
        if(j == t.length-1 && i !== s.length-1 ){
            return false
        }
        if(i === s.length-1 && t[j] === s[i]){
            return true
        }
        if(s[i] !== t[j]){
            j++
        }
        else {
            j++ 
            i++
        }
    }
    return false
};