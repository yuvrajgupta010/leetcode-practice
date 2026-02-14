1
2class StackNode {
3  constructor(value) {
4    this.value = value;
5    this.next = null;
6  }
7}
8
9var MyStack = function () {
10  this.first = null;
11  //   this.last = null;
12  this.size = 0;
13};
14
15/**
16 * @param {number} x
17 * @return {void}
18 */
19MyStack.prototype.push = function (x) {
20  const node = new StackNode(x);
21  if (!this.first) {
22    this.first = node;
23    // this.last = node;
24  } else {
25    const tem = this.first;
26    node.next = tem;
27    this.first = node;
28  }
29  this.size++;
30};
31
32/**
33 * @return {number}
34 */
35MyStack.prototype.pop = function () {
36  if (!this.first) {
37    return null;
38  } else {
39    const valueOfStack = this.first.value;
40    const tem = this.first.next;
41    this.first = tem;
42    this.size--;
43    return valueOfStack;
44  }
45};
46
47/**
48 * @return {number}
49 */
50MyStack.prototype.top = function () {
51  if (!this.size) return null;
52  return this.first.value;
53};
54
55/**
56 * @return {boolean}
57 */
58MyStack.prototype.empty = function () {
59  return !this.size;
60};
61
62/**
63 * Your MyStack object will be instantiated and called as such:
64 * var obj = new MyStack()
65 * obj.push(x)
66 * var param_2 = obj.pop()
67 * var param_3 = obj.top()
68 * var param_4 = obj.empty()
69 */