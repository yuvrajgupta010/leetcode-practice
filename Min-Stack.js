1
2var MinStack = function () {
3  this.stack = [];
4  this.monoStack = [[Infinity, 1]];
5  this.currMin = Infinity;
6};
7
8/**
9 * @param {number} val
10 * @return {void}
11 */
12MinStack.prototype.push = function (val) {
13  this.stack.push(val);
14  if (val < this.currMin) {
15    this.monoStack.push([val, 1]);
16    this.currMin = val;
17  } else if (val === this.currMin) {
18    const monoStackElem = this.monoStack.at(-1);
19    monoStackElem[1] += 1;
20  }
21};
22
23/**
24 * @return {void}
25 */
26MinStack.prototype.pop = function () {
27  const stackElem = this.stack.pop();
28  if (this.currMin === stackElem) {
29    const monoStackElem = this.monoStack.at(-1);
30    monoStackElem[1] -= 1;
31    if (!monoStackElem[1]) {
32      this.monoStack.pop();
33      this.currMin = this.monoStack.at(-1).at(0);
34    }
35  }
36};
37
38/**
39 * @return {number}
40 */
41MinStack.prototype.top = function () {
42  return this.stack.at(-1);
43};
44
45/**
46 * @return {number}
47 */
48MinStack.prototype.getMin = function () {
49  return this.currMin;
50};
51
52/**
53 * Your MinStack object will be instantiated and called as such:
54 * var obj = new MinStack()
55 * obj.push(val)
56 * obj.pop()
57 * var param_3 = obj.top()
58 * var param_4 = obj.getMin()
59 */