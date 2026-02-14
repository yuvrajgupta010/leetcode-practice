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
64 * Your MyQueue object will be instantiated and called as such:
65 * var obj = new MyQueue()
66 * obj.push(x)
67 * var param_2 = obj.pop()
68 * var param_3 = obj.peek()
69 * var param_4 = obj.empty()
70 */