/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0
  let currSum = 0
  let minLength = Infinity

  for (let i = 0; i < nums.length; i++){
      currSum += nums[i]
      while (currSum >= target){
          minLength = Math.min(minLength, i - left +1)
          currSum -= nums[left]
          left++
      }
  }
  return minLength === Infinity? 0: minLength

};