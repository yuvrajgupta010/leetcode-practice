1/**
2 * @param {number[][]} pairs
3 * @return {number}
4 */
5var findLongestChain = function (pairs) {
6  const n = pairs.length;
7  let maxCount = 1;
8  pairs.sort((a, b) => a[1] - b[1]);
9
10  for (let i = 0; i < n - 1; i++) {
11    let countOfChain = 1;
12    let prevIdx = i;
13
14    for (let j = i + 1; j < n; j++) {
15      if (pairs[prevIdx][1] < pairs[j][0]) {
16        countOfChain++;
17        prevIdx = j;
18      }
19    }
20
21    maxCount = maxCount < countOfChain ? countOfChain : maxCount;
22  }
23
24  return maxCount;
25};