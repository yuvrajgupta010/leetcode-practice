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
53        if (this.heap[currIdx][0] > this.heap[minIdx][0]) {
54          [this.heap[minIdx], this.heap[currIdx]] = [
55            this.heap[currIdx],
56            this.heap[minIdx],
57          ];
58          currIdx = minIdx;
59        } else break;
60      }
61    }
62
63    return node;
64  }
65}
66
67/**
68 * @param {number[][]} points
69 * @return {number}
70 */
71var minCostConnectPoints = function (points) {
72  const mstSet = new Set();
73  const queue = new MinPQ();
74  let cost = 0;
75  queue.enqueue([0, 0]);
76
77  while (queue.heap.length) {
78    const [w, v] = queue.dequeue();
79
80    if (mstSet.has(v)) continue;
81
82    mstSet.add(v);
83    cost += w;
84
85    for (let i = 0; i < points.length; i++) {
86      if (v === i) continue;
87      if (!mstSet.has(i)) {
88        const x = Math.abs(points[v][0] - points[i][0]);
89        const y = Math.abs(points[v][1] - points[i][1]);
90        queue.enqueue([x + y, i]);
91      }
92    }
93  }
94
95  return cost;
96};