/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length -1
    while (left < right){
        if (target > numbers[left] + numbers[right]){
            left++
        }
        else if(target === numbers[left] + numbers[right]){
            return [left+1, right+1]
        }
        else{
            right--
        }
    }
    
};