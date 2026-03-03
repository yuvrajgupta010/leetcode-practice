1
2class QueueNode {
3  constructor(value) {
4    this.value = value;
5    this.next = null;
6  }
7}
8
9var MyQueue = function () {
10  this.first = null;
11  this.last = null;
12  this.size = 0;
13};
14
15/**
16 * @param {number} x
17 * @return {void}
18 */
19MyQueue.prototype.push = function (x) {
20  const node = new QueueNode(x);
21  if (!this.first) {
22    this.first = node;
23    this.last = node;
24  } else {
25    this.last.next = node;
26    this.last = node;
27  }
28  this.size++;
29};
30
31/**
32 * @return {number}
33 */
34MyQueue.prototype.pop = function () {
35  if (!this.first) return null;
36
37  const tem = this.first;
38  if (this.first === this.last) {
39    this.first = null;
40    this.last = null;
41  } else {
42    this.first = tem.next;
43  }
44  this.size--;
45  return tem.value;
46};
47
48/**
49 * @return {number}
50 */
51MyQueue.prototype.peek = function () {
52  if (!this.size) return null;
53  return this.first.value;
54};
55
56/**
57 * @return {boolean}
58 */
59MyQueue.prototype.empty = function () {
60  return !this.size;
61};
62
63/**
64 * Definition for a binary tree node.
65 * function TreeNode(val, left, right) {
66 *     this.val = (val===undefined ? 0 : val)
67 *     this.left = (left===undefined ? null : left)
68 *     this.right = (right===undefined ? null : right)
69 * }
70 */
71/**
72 * @param {TreeNode} root
73 * @return {number}
74 */
75var widthOfBinaryTree = function (root) {
76  if (!root) return 0;
77
78  let maxWidth = 0;
79  const queue = new MyQueue();
80  queue.push([root, 0]);
81
82  while (!queue.empty()) {
83    const startIdx = queue.first.value[1];
84    const levelSize = queue.size;
85
86    let first = 0,
87      last = 0;
88
89    for (let i = 0; i < levelSize; i++) {
90      const [node, index] = queue.pop();
91      const normalized = index - startIdx;
92
93      if (i === 0) first = normalized;
94      if (i === levelSize - 1) last = normalized;
95
96      if (node.left) queue.push([node.left, 2 * normalized + 1]);
97
98      if (node.right) queue.push([node.right, 2 * normalized + 2]);
99    }
100
101    maxWidth = Math.max(maxWidth, last - first + 1);
102  }
103
104  return maxWidth;
105};