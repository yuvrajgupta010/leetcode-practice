1/**
2 * @param {number[]} g
3 * @param {number[]} s
4 * @return {number}
5 */
6var findContentChildren = function(g, s) {
7    g.sort((a, b) => a - b);
8  s.sort((a, b) => a - b);
9  let satisfiedKids = 0;
10  let gPointer = 0,
11    sPointer = 0;
12
13  while (gPointer < g.length && sPointer < s.length) {
14    if (s[sPointer] >= g[gPointer]) {
15      gPointer++;
16      satisfiedKids++;
17    } 
18      sPointer++;
19  }
20  // console.log(satisfiedKids);
21  return satisfiedKids;
22};