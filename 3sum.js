// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var threeSum = function(nums) {
    let res = []
    let sortArr = nums.sort(function(a,b){return a - b})
    for(let i = 0; i < sortArr.length-2; i++){
        while(sortArr[i] === sortArr[i-1]){
          i++
        }
        let left = i+1
        let right = sortArr.length-1
        let target = 0 - sortArr[i]
        while(left < right){
            if(sortArr[left] + sortArr[right] === target){    
                res.push([sortArr[i], sortArr[left], sortArr[right]])
                
                while (sortArr[left+1] === sortArr[left]){
                  left++
                }
                while(sortArr[right-1] === sortArr[right]){
                  right--
                }
                left++
                right--
                
            }
            else if(sortArr[left] + sortArr[right] > target){
                right--
            }
            else if(sortArr[left] + sortArr[right] < target){
                left++
            }    
        } 
    }
    return res   
};