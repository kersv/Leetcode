/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0
  let right = nums.length -1
  let i = 0
  while (i <= right){
      if(nums[i] === 0){
          temp = nums[left]
          nums[left] = nums[i]
          nums[i] = temp
          left++
          i++
      }
      else if(nums[i] === 2){
          temp = nums[right]
          nums[right] = nums[i]
          nums[i] = temp
          right--
      }
      else{
          i++
      }
  }
  return nums
};