1
2/**
3 * @param {number} n
4 * @param {number[][]} edges
5 * @return {number[]}
6 */
7var findMinHeightTrees = function (n, edges) {
8  if (n === 1) return [0];
9
10  const adjacencyList = Array.from({ length: n }, () => []);
11  const degree = new Array(n).fill(0);
12  const dequeued = new Set();
13
14  for (let [u, v] of edges) {
15    adjacencyList[u].push(v);
16    adjacencyList[v].push(u);
17    degree[u]++;
18    degree[v]++;
19  }
20
21  const queue = [];
22  for (let i = 0; i < n; i++) {
23    if (degree[i] === 1) queue.push(i);
24  }
25
26  let left = n;
27
28  while (left > 2) {
29    const size = queue.length;
30    left -= size;
31
32    for (let i = 0; i < size; i++) {
33      const vertex = queue.shift();
34      dequeued.add(vertex);
35
36      // const adjacentVertxies = adjacencyList[vertex];
37      for (let adjacentNode of adjacencyList[vertex]) {
38        if (dequeued.has(adjacentNode)) continue;
39        degree[adjacentNode]--;
40        if (degree[adjacentNode] === 1) queue.push(adjacentNode);
41      }
42    }
43  }
44
45  return queue;
46};