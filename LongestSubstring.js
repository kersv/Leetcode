/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0
  let left = 0
  let right = 0
  let hashset = new Set()
  while (right < s.length){
        if(!hashset.has(s[right])){
          hashset.add(s[right])
          maxLength = Math.max(maxLength, (right - left)+1)
          right++
      }
      else if (hashset.has(s[right])){
          hashset.delete(s[left])
          left++
      }
  }
  return maxLength
  
};