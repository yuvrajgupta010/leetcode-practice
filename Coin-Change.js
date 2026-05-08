1/**
2 * @param {number[]} coins
3 * @param {number} amount
4 * @return {number}
5 */
6var coinChange = function (coins, amount) {
7  const dp = Array(amount + 1).fill(Infinity);
8
9  // Base Case
10  dp[0] = 0;
11
12  for (let target = 1; target <= amount; target++) {
13    for (let coin of coins) {
14      // valid state
15      if (target - coin >= 0) {
16        dp[target] = Math.min(dp[target], 1 + dp[target - coin]);
17      }
18    }
19  }
20
21  return dp[amount] === Infinity ? -1 : dp[amount];
22};