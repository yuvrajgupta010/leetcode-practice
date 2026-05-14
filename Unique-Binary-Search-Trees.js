1/**
2 * @param {number} n
3 * @return {number}
4 */
5var numTrees = function (n) {
6    const memo = new Array(n + 1).fill(-1);
7    return solve(n, memo);
8};
9
10const solve = (n, memo) => {
11    if (n <= 1) return 1;
12    if (memo[n] !== -1) return memo[n];
13    let ans = 0;
14    for (let i = 1; i <= n; i++) {
15        ans += solve(i - 1, memo) * solve(n - i, memo);
16    }
17    memo[n] = ans;
18    return ans;
19};