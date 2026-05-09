1var longestCommonSubsequence = function (text1, text2) {
2  const dp = Array.from({ length: text1.length }, () =>
3    Array.from({ length: text2.length }, () => -1),
4  );
5
6  const solve = (idx1, idx2) => {
7    if (idx1 < 0 || idx2 < 0) return 0;
8
9    if (dp[idx1][idx2] !== -1) return dp[idx1][idx2];
10    if (text1[idx1] === text2[idx2]) {
11      return (dp[idx1][idx2] = 1 + solve(idx1 - 1, idx2 - 1));
12    } else {
13      return (dp[idx1][idx2] = Math.max(
14        solve(idx1 - 1, idx2),
15        solve(idx1, idx2 - 1),
16      ));
17    }
18  };
19
20  return solve(text1.length - 1, text2.length - 1);
21};