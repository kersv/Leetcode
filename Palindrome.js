/**
 * @param {string} s
 * @return {boolean}
 */

 var isPalindrome = function(s) {

    let lowerString = s.toLowerCase()
    let newArr = []
    for (let i = 0; i < s.length; i++){
        if (isCharacter(lowerString[i])){
            newArr.push(lowerString[i])
        }
    }
    let left = 0
    let right = newArr.length-1
    while (left < right){
        if(newArr[left] != newArr[right]){
            return false
        }
        left++
        right--  
    }
    return true
    
};
    function isCharacter(str) {
        return /^[a-zA-Z0-9]$/.test(str);
    }