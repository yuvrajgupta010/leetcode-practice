1/**
2 * @param {number[]} g
3 * @param {number[]} s
4 * @return {number}
5 */
6var findContentChildren = function (g, s) {
7  g.sort((a, b) => a - b);
8  s.sort((a, b) => a - b);
9
10  let i = g.length,
11    j = s.length,
12    count = 0;
13
14  while (i && j) {
15    if (g[i - 1] <= s[j - 1]) {
16      count++;
17      i--;
18      j--;
19    } else {
20      i--;
21    }
22  }
23
24  return count;
25};