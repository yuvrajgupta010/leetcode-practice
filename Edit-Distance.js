1/**
2 * @param {string} word1
3 * @param {string} word2
4 * @return {number}
5 */
6var minDistance = function (word1, word2) {
7  const n = word1.length;
8  const m = word2.length;
9
10  const dp = Array.from({ length: n }, () =>
11    Array.from({ length: m }, () => -1),
12  );
13
14  const solve = (idx1, idx2) => {
15    if (idx1 < 0) return idx2 + 1;
16    if (idx2 < 0) return idx1 + 1;
17
18    if (dp[idx1][idx2] !== -1) return dp[idx1][idx2];
19    if (word1[idx1] === word2[idx2]) {
20      return (dp[idx1][idx2] = 0 + solve(idx1 - 1, idx2 - 1));
21    } else {
22      return (dp[idx1][idx2] =
23        1 +
24        Math.min(
25          solve(idx1 - 1, idx2 - 1),
26          solve(idx1 - 1, idx2),
27          solve(idx1, idx2 - 1),
28        )); // replace, delete, insert
29    }
30  };
31
32  return solve(n - 1, m - 1);
33};