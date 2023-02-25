/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let diff = 0;
  let buy = prices[0];
  let sell = prices[0];
  for (const price of prices) {
    if (price < buy) {
      buy = price;
      sell = price;
    } else if (price > sell) {
      diff = Math.max(diff, price - buy);
      sell = price;
    }
  }
  return diff;
};