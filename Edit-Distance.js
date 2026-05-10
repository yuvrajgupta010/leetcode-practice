1/**
2 * @param {string} word1
3 * @param {string} word2
4 * @return {number}
5 */
6var minDistance = function (word1, word2) {
7  const n = word1.length;
8  const m = word2.length;
9
10  const dp = Array.from({ length: n + 1 }, () =>
11    Array.from({ length: m + 1 }, () => 0),
12  );
13  for (let idx1 = 0; idx1 <= n; idx1++) {
14    dp[idx1][0] = idx1;
15  }
16  for (let idx2 = 0; idx2 <= m; idx2++) {
17    dp[0][idx2] = idx2;
18  }
19
20  for (let idx1 = 1; idx1 <= n; idx1++) {
21    for (let idx2 = 1; idx2 <= m; idx2++) {
22      if (word1[idx1 - 1] === word2[idx2 - 1]) {
23        dp[idx1][idx2] = 0 + dp[idx1 - 1][idx2 - 1];
24      } else {
25        dp[idx1][idx2] =
26          1 +
27          Math.min(
28            dp[idx1 - 1][idx2 - 1],
29            dp[idx1 - 1][idx2],
30            dp[idx1][idx2 - 1],
31          ); // replace, delete, insert
32      }
33    }
34  }
35
36  //   console.log(dp[n][m]);
37  return dp[n][m];
38};