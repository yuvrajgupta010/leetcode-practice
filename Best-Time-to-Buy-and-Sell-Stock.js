1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function (prices) {
6  let minCost = prices[0],
7    profit = 0,
8    n = prices.length;
9
10  for (let i = 1; i < n; i++) {
11    if (prices[i] < minCost) {
12      minCost = prices[i];
13      continue;
14    } else {
15      profit = Math.max(prices[i] - minCost, profit);
16    }
17  }
18
19  return profit;
20};