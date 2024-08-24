const prices = [7,1,5,3,6,4];
function maxProfit(prices) {
  if (prices.length === 0) return 0;

  let maxPrice = 0;
  let maxProfit = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
      if (prices[i] > maxPrice) {
          maxPrice = prices[i];
      } else if (maxPrice - prices[i] > maxProfit) {
          maxProfit = maxPrice - prices[i];
      }
  }

  return maxProfit;
}


console.log(maxProfit(prices)); // 7