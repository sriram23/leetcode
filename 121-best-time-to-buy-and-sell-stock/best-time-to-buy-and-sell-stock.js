/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minIndex = 0
    let maxProfit = 0
    for(let i=0;i<prices.length;i++) {
        minIndex = prices.indexOf(Math.min(prices[minIndex], prices[i]))
        maxProfit = Math.max(maxProfit, (prices[i] - prices[minIndex]))
    }
    return maxProfit
};