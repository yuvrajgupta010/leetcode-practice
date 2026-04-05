1
2class MinPQ {
3  constructor() {
4    this.heap = [];
5  }
6
7  enqueue(val) {
8    this.heap.push(val);
9
10    let currIdx = this.heap.length - 1;
11    while (true) {
12      if (currIdx <= 0) break;
13
14      const parentIdx = Math.floor((currIdx - 1) / 2);
15
16      if (this.heap[parentIdx][0] > this.heap[currIdx][0]) {
17        [this.heap[parentIdx], this.heap[currIdx]] = [
18          this.heap[currIdx],
19          this.heap[parentIdx],
20        ];
21        currIdx = parentIdx;
22      } else break;
23    }
24  }
25
26  dequeue() {
27    [this.heap[0], this.heap[this.heap.length - 1]] = [
28      this.heap[this.heap.length - 1],
29      this.heap[0],
30    ];
31
32    const node = this.heap.pop();
33
34    let currIdx = 0;
35    while (true) {
36      const leftChildIdx = 2 * currIdx + 1;
37      const rightChildIdx = 2 * currIdx + 2;
38
39      if (leftChildIdx >= this.heap.length) break;
40      if (rightChildIdx >= this.heap.length) {
41        if (this.heap[leftChildIdx][0] < this.heap[currIdx][0]) {
42          [this.heap[leftChildIdx], this.heap[currIdx]] = [
43            this.heap[currIdx],
44            this.heap[leftChildIdx],
45          ];
46        }
47        break;
48      } else {
49        let minIdx = leftChildIdx;
50        if (this.heap[leftChildIdx][0] > this.heap[rightChildIdx][0])
51          minIdx = rightChildIdx;
52
53        if (this.heap[currIdx][0] > this.heap[minIdx][0])
54          [this.heap[minIdx], this.heap[currIdx]] = [
55            this.heap[currIdx],
56            this.heap[minIdx],
57          ];
58        currIdx = minIdx;
59      }
60    }
61
62    return node;
63  }
64}
65
66const findMinCostToConnect = (wightedGraph) => {
67  const mstSet = new Set();
68  const queue = new MinPQ();
69  let cost = 0;
70  queue.enqueue([0, 0]);
71
72  while (queue.heap.length) {
73    const [w, v] = queue.dequeue();
74
75    if (mstSet.has(v)) continue;
76
77    mstSet.add(v);
78    cost += w;
79
80    for (let node of wightedGraph[v]) {
81      if (!mstSet.has(node[1])) {
82        queue.enqueue(node);
83      }
84    }
85  }
86
87  return cost;
88};
89
90/**
91 * @param {number[][]} points
92 * @return {number}
93 */
94var minCostConnectPoints = function (points) {
95  const wightedGraph = [];
96
97  for (let i = 0; i < points.length; i++) {
98    const connections = [];
99    for (let j = 0; j < points.length; j++) {
100      if (i === j) continue;
101      const x = Math.abs(points[j][0] - points[i][0]);
102      const y = Math.abs(points[j][1] - points[i][1]);
103      connections.push([x + y, j]);
104    }
105    wightedGraph.push(connections);
106  }
107
108  return findMinCostToConnect(wightedGraph);
109};