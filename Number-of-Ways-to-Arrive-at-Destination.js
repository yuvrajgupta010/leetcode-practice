1class _MinHeap {
2  constructor() {
3    this.heap = [];
4    this.size = 0;
5  }
6
7  enqueue(w, n) {
8    let currIdx = this.heap.length;
9    this.heap.push([w, n]);
10    this.size++;
11
12    while (currIdx > 0) {
13      const parentIdx = Math.floor((currIdx - 1) / 2);
14      // console.log(this.heap);
15      if (this.heap[parentIdx][0] < w) break;
16      [this.heap[parentIdx], this.heap[currIdx]] = [
17        this.heap[currIdx],
18        this.heap[parentIdx],
19      ];
20      currIdx = parentIdx;
21    }
22  }
23
24  dequeue() {
25    if (!this.size) return;
26
27    [this.heap[0], this.heap[this.size - 1]] = [
28      this.heap[this.size - 1],
29      this.heap[0],
30    ];
31    const dequeuedNode = this.heap.pop();
32    this.size--;
33
34    let currIdx = 0;
35    const lastIdx = this.size - 1;
36
37    while (currIdx < lastIdx) {
38      const leftChildIdx = 2 * currIdx + 1;
39      const rightChildIdx = 2 * currIdx + 2;
40
41      let isSwapHappened = false;
42
43      if (leftChildIdx < this.size && rightChildIdx < this.size) {
44        let minIdx =
45          this.heap[leftChildIdx][0] > this.heap[rightChildIdx][0]
46            ? rightChildIdx
47            : leftChildIdx;
48        if (this.heap[currIdx][0] > this.heap[minIdx][0]) {
49          [this.heap[currIdx], this.heap[minIdx]] = [
50            this.heap[minIdx],
51            this.heap[currIdx],
52          ];
53          currIdx = minIdx;
54          isSwapHappened = true;
55        }
56      } else if (leftChildIdx < this.size) {
57        if (this.heap[currIdx][0] > this.heap[leftChildIdx][0]) {
58          [this.heap[currIdx], this.heap[leftChildIdx]] = [
59            this.heap[leftChildIdx],
60            this.heap[currIdx],
61          ];
62          isSwapHappened = true;
63          currIdx = leftChildIdx;
64        }
65      }
66      if (!isSwapHappened) break;
67    }
68
69    return dequeuedNode;
70  }
71}
72
73/**
74 * @param {number} n
75 * @param {number[][]} roads
76 * @return {number}
77 */
78var countPaths = function (n, roads) {
79  const adjacencyList = Array.from({ length: n }, () => []);
80  const pq = new _MinHeap();
81  const dist = Array.from({ length: n }, () => Infinity);
82  const numOfOptions = Array.from({ length: n }, () => 0);
83  dist[0] = 0;
84  numOfOptions[0] = 1;
85  pq.enqueue(0, 0); // weight, node
86
87  for (let [u, v, w] of roads) {
88    adjacencyList[u].push([w, v]);
89    adjacencyList[v].push([w, u]);
90  }
91
92  const MOD = 1e9 + 7;
93
94  while (pq.size) {
95    const [currDistance, u] = pq.dequeue();
96
97    if (currDistance > dist[u]) continue;
98
99    for (let [distance, v] of adjacencyList[u]) {
100      let newDistance = currDistance + distance;
101
102      if (newDistance < dist[v]) {
103        dist[v] = newDistance;
104        pq.enqueue(newDistance, v);
105        numOfOptions[v] = numOfOptions[u];
106      } else if (newDistance === dist[v]) {
107        numOfOptions[v] = (numOfOptions[v] + numOfOptions[u]) % MOD;
108      }
109    }
110  }
111
112  // console.log(numOfOptions.at(-1));
113  return numOfOptions.at(-1);
114};