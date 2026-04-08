1/**
2 * @param {number[][]} times
3 * @param {number} n
4 * @param {number} k
5 * @return {number}
6 */
7var networkDelayTime = function (times, n, k) {
8  const distances = Array.from({ length: n + 1 }, (_, i) => {
9    if (k === i) return 0;
10    return Infinity;
11  });
12
13  for (let i = 0; i < n; i++) {
14    for (let [u, v, wt] of times) {
15      if (distances[u] + wt < distances[v]) {
16        distances[v] = distances[u] + wt;
17      }
18    }
19  }
20
21  let mini = -1;
22  for (let i = 1; i < distances.length; i++) {
23    if (distances[i] === Infinity) return -1;
24    if (distances[i] > mini) mini = distances[i];
25  }
26
27  return mini;
28};