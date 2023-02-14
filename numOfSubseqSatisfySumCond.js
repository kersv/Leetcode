/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a,b) => {return a-b})
    let right = nums.length -1
    let mod = BigInt(10**9 +7)
    let res = BigInt(0)
    let left = 0
    while (left <= right){
        if(nums[right] + nums[left] <= target){
            res += (BigInt(2)**BigInt(right-left))
            left++
        }
        else{
            right--
        }
    }
    return res % mod
    
};