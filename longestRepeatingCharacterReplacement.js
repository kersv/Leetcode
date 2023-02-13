/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0
    let right = 0
    let maxlength = 0
    let currlength = 0
    let recurring = 0
    let hash = new Map()
    while (right <= s.length -1 ){
        if (!hash.has(s[right])){
            hash.set(s[right], 1)
    
        }
        else{
            hash.set(s[right], hash.get(s[right])+1)
        }

        currlength = right - left + 1

        if (recurring < hash.get(s[right])){
            recurring = hash.get(s[right])
        }
        if(currlength - recurring > k){
            hash.set(s[left], hash.get(s[left])-1)
            left++
            currlength--
        }
        maxlength = Math.max(currlength, maxlength)
        right++;
    }
    return maxlength
};