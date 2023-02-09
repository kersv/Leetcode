/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0
  let l = 0
  let r = 0
  while (r < prices.length ){
      if(l == r ){
          r++
      }
      else if(prices[l] > prices[r]){
          l++
      }
      else{
          profit = Math.max(profit, prices[r] - prices[l])
          r++
      }
  }
  return profit
  
};