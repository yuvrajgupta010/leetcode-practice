1/**
2 * @param {number[]} candidates
3 * @param {number} target
4 * @return {number[][]}
5 */
6var combinationSum2 = function(candidates, target) {
7     candidates.sort((a, b) => a - b);
8  const result = [];
9  const path = [];
10
11  function backtrack(start, remaining) {
12    if (remaining === 0) {
13      result.push([...path]);
14      return;
15    }
16
17    for (let i = start; i < candidates.length; i++) {
18      // skip duplicates at same level
19      if (i > start && candidates[i] === candidates[i - 1]) continue;
20
21      // prune
22      if (candidates[i] > remaining) break;
23
24      path.push(candidates[i]);
25      backtrack(i + 1, remaining - candidates[i]);
26      path.pop();
27    }
28  }
29
30  backtrack(0, target);
31  return result;
32};