1
2class DSU {
3  constructor(edges) {
4    let maxNode = 0;
5    for (let [u, v] of edges) {
6      maxNode = Math.max(maxNode, u, v);
7    }
8    this.size = Array.from({ length: maxNode + 1 }, () => 1);
9    this.parent = Array.from({ length: maxNode + 1 }, (_, idx) => idx);
10  }
11
12  findParent(node) {
13    if (node === this.parent[node]) return node;
14    this.parent[node] = this.findParent(this.parent[node]); // path compression
15    return this.parent[node];
16  }
17
18  unionBySize(u, v) {
19    const pu = this.findParent(u);
20    const pv = this.findParent(v);
21
22    if (pu === pv) {
23      return false;
24    }
25    if (this.size[pu] >= this.size[pv]) {
26      this.parent[pv] = pu;
27      this.size[pu] += this.size[pv];
28      return true;
29    } else {
30      this.parent[pu] = pv;
31      this.size[pv] += this.size[pu];
32      return true;
33    }
34  }
35}
36
37/**
38 * @param {number[][]} edges
39 * @return {number[]}
40 */
41var findRedundantConnection = function (edges) {
42  const dsu = new DSU(edges);
43
44  for (let [u, v] of edges) {
45    if (!dsu.unionBySize(u, v)) {
46      return [u, v];
47    }
48  }
49};