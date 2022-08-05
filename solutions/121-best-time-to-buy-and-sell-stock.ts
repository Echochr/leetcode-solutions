const maxProfit = (prices: number[]): number => {
  let profit = 0;
  let low = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (low > prices[i])
      low = prices[i];
    else if (prices[i] - low > profit)
      profit = prices[i] - low;
  }

  return profit;
};

const arr1 = [7, 1, 5, 3, 6, 4];
maxProfit(arr1);
