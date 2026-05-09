1var longestCommonSubsequence = function (text1, text2) {
2  const n = text1.length;
3  const m = text2.length;
4
5  const dp = Array.from({ length: n + 1 }, () =>
6    Array.from({ length: m + 1 }, () => -1),
7  );
8
9  for (let i = 0; i <= n; i++) dp[i][0] = 0;
10  for (let j = 0; j <= m; j++) dp[0][j] = 0;
11
12  for (let i = 1; i <= n; i++) {
13    for (let j = 1; j <= m; j++) {
14      if (text1[i - 1] === text2[j - 1]) {
15        dp[i][j] = 1 + dp[i - 1][j - 1];
16      } else {
17        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
18      }
19    }
20  }
21
22  return dp[n][m];
23};