var containsDuplicate = function(nums) {
    let hashmap = new Map()
    for(let i = 0; i < nums.length; i++){
        if (hashmap.has(nums[i])){
            return true
        }
        hashmap.set(nums[i], true)
    }
    return false

};