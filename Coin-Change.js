1/**
2 * @param {number[]} coins
3 * @param {number} amount
4 * @return {number}
5 */
6var coinChange = function (coins, amount) {
7  const dp = Array.from({ length: amount + 1 }, () => -1);
8
9  const solve = (target) => {
10    if (target === 0) return 0;
11    if (target < 0) return Infinity;
12    if (dp[target] !== -1) return dp[target];
13
14    let minCount = Infinity;
15
16    for (let coin of coins) {
17      let c = 1 + solve(target - coin);
18
19      minCount = c < minCount ? c : minCount;
20    }
21
22    dp[target] = minCount;
23    return minCount;
24  };
25
26  const ans = solve(amount);
27
28  return ans === Infinity ? -1 : ans;
29};