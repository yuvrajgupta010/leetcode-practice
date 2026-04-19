1class DSU {
2  constructor(n) {
3    this.parents = Array.from({ length: n }, (_, i) => i);
4    this.size = Array.from({ length: n }, () => 1);
5  }
6
7  findParent(node) {
8    if (this.parents[node] === node) return node;
9    this.parents[node] = this.findParent(this.parents[node]);
10    return this.parents[node];
11  }
12
13  addUnion(u, v) {
14    const uP = this.findParent(u);
15    const vP = this.findParent(v);
16
17    if (uP === vP) return uP;
18
19    if (this.size[uP] < this.size[vP]) {
20      this.parents[uP] = vP;
21      this.size[vP] += this.size[uP];
22    } else {
23      this.parents[vP] = uP;
24      this.size[uP] += this.size[vP];
25    }
26  }
27}
28
29/**
30 * @param {number[][]} isConnected
31 * @return {number}
32 */
33var findCircleNum = function (isConnected) {
34  const n = isConnected.length;
35  const dsu = new DSU(n);
36
37  for (let i = 0; i < n; i++) {
38    for (let j = 0; j < n; j++) {
39      if (i === j) continue;
40      if (isConnected[i][j]) {
41        dsu.addUnion(i, j);
42      }
43    }
44  }
45
46  let numOfProvince = 0;
47  const parents = dsu.parents;
48  for (let i = 0; i < parents.length; i++) {
49    if (parents[i] === i) {
50      numOfProvince++;
51    }
52  }
53
54  // console.log(numOfProvince);
55  return numOfProvince;
56};