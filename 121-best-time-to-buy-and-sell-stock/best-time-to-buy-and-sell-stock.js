/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let buy = prices[0]
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < buy) {
            buy = prices[i]
        }
        profit = Math.max(prices[i]-buy, profit) 
    }
    return profit
};