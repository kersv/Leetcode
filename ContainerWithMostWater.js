/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let right = height.length-1
  let total = 0
  while (left < right){
      if(height[left] < height[right]){
          total = Math.max((height[left] * (right-left)), total)
          left++
      }
      else if (height[right] < height[left]){
          total = Math.max((height[right] * (right-left)), total)
          right--
      }
      else{
          total = Math.max((height[right] * (right-left)), total)
          left++   
      }

  }
  return total
};