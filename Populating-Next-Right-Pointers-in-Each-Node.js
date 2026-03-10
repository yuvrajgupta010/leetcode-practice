1/**
2 * // Definition for a _Node.
3 * function _Node(val, left, right, next) {
4 *    this.val = val === undefined ? null : val;
5 *    this.left = left === undefined ? null : left;
6 *    this.right = right === undefined ? null : right;
7 *    this.next = next === undefined ? null : next;
8 * };
9 */
10
11/**
12 * @param {_Node} root
13 * @return {_Node}
14 */
15var connect = function (root) {
16  if (!root) return root;
17  const stack = [root];
18
19  while (stack.length) {
20    const n = stack.length;
21    for (let i = 0; i < n; i++) {
22      const node = stack.shift();
23      if (node.left) stack.push(node.left);
24      if (node.right) stack.push(node.right);
25      if (i < n - 1) {
26        node.next = stack[0];
27      }
28    }
29  }
30
31  return root;
32};