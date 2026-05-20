1class _MinHeap {
2  constructor() {
3    this.heap = [];
4  }
5  push(val) {
6    this.heap.push(val);
7    this.bubbleUp();
8  }
9  pop() {
10    const max = this.heap[0];
11    const end = this.heap.pop();
12    if (this.heap.length > 0) {
13      this.heap[0] = end;
14      this.bubbleDown();
15    }
16    return max;
17  }
18  peek() {
19    return this.heap[0];
20  }
21  bubbleUp() {
22    let idx = this.heap.length - 1;
23    const element = this.heap[idx];
24    while (idx > 0) {
25      let parentIdx = Math.floor((idx - 1) / 2);
26      let parent = this.heap[parentIdx];
27      if (element >= parent) break;
28      this.heap[parentIdx] = element;
29      this.heap[idx] = parent;
30      idx = parentIdx;
31    }
32  }
33  bubbleDown() {
34    let idx = 0;
35    const length = this.heap.length;
36    const element = this.heap[0];
37    while (true) {
38      let leftChildIdx = 2 * idx + 1;
39      let rightChildIdx = 2 * idx + 2;
40      let leftChild, rightChild;
41      let swap = null;
42      if (leftChildIdx < length) {
43        leftChild = this.heap[leftChildIdx];
44        if (leftChild < element) {
45          swap = leftChildIdx;
46        }
47      }
48      if (rightChildIdx < length) {
49        rightChild = this.heap[rightChildIdx];
50        if (
51          (swap === null && rightChild < element) ||
52          (swap !== null && rightChild < leftChild)
53        ) {
54          swap = rightChildIdx;
55        }
56      }
57      if (swap === null) break;
58      this.heap[idx] = this.heap[swap];
59      this.heap[swap] = element;
60      idx = swap;
61    }
62  }
63}
64
65/**
66 * @param {number[]} nums
67 * @param {number} k
68 * @return {number}
69 */
70var findKthLargest = function (nums, k) {
71  let heap = new _MinHeap();
72  for (let i = 0; i < k; i++) {
73    heap.push(nums[i]);
74  }
75  for (let i = k; i < nums.length; i++) {
76    if (nums[i] > heap.peek()) {
77      heap.pop();
78      heap.push(nums[i]);
79    }
80  }
81  return heap.peek();
82};