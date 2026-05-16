1/**
2 * @param {number[][]} pairs
3 * @return {number}
4 */
5var findLongestChain = function (pairs) {
6  const n = pairs.length;
7  pairs.sort((a, b) => a[1] - b[1]);
8
9  let countOfChain = 1;
10  let prevIdx = 0;
11
12  for (let j = 1; j < n; j++) {
13    if (pairs[prevIdx][1] < pairs[j][0]) {
14      countOfChain++;
15      prevIdx = j;
16    }
17  }
18
19  return countOfChain;
20};