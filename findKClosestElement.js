/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let NewArr = [];
    let left = 0;
    let right = k;
    for (let i = 0; i < k; i++){
        NewArr.push(arr[i])
    }
    while (right <= arr.length){
        if(Math.abs(arr[right] - x) < Math.abs(arr[left] - x)  ){
            NewArr.push(arr[right])
            NewArr.shift()
            right++
            left++
        }
        else if(arr[left] === arr[right]){
            left++
            right++
        }
        else{
            return NewArr
        }
    }
    
    
};