1
2class Graph {
3  constructor() {
4    this.adjacentList = {};
5  }
6
7  addVertex(vertex) {
8    if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
9  }
10
11  addEdge(vertex1, vertex2) {
12    const vertex1Edges = this.adjacentList[vertex1];
13    const vertex2Edges = this.adjacentList[vertex2];
14
15    if (!vertex1Edges || !vertex2Edges) return;
16    if (vertex1Edges.includes(vertex2)) return;
17
18    vertex1Edges.push(vertex2);
19    vertex2Edges.push(vertex1);
20  }
21
22  dfsIterativeFindCycle() {
23    const visited = new Set();
24    const parents = new Map();
25
26    for (let startNode of Object.keys(this.adjacentList)) {
27      startNode = +startNode;
28
29      if (visited.has(startNode)) continue;
30
31      const stack = [startNode];
32      parents.set(startNode, -1);
33
34      while (stack.length) {
35        const node = stack.pop();
36
37        if (!visited.has(node)) {
38          visited.add(node);
39
40          for (let connection of this.adjacentList[node]) {
41            if (!visited.has(connection)) {
42              parents.set(connection, node);
43              stack.push(connection);
44            } else if (parents.get(node) !== connection) {
45              return true;
46            }
47          }
48        }
49      }
50    }
51
52    return false;
53  }
54}
55/**
56 * @param {number[][]} edges
57 * @return {number[]}
58 */
59var findRedundantConnection = function (edges) {
60  const graph = new Graph();
61
62  for (let [u, v] of edges) {
63    graph.addVertex(u);
64    graph.addVertex(v);
65    graph.addEdge(u, v);
66
67    if (graph.dfsIterativeFindCycle()) {
68      return [u, v];
69    }
70  }
71};