1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9class BSTIterator {
10  constructor(root) {
11    this.stack = [];
12
13    let curr = root;
14    while (curr) {
15      this.stack.push(curr);
16      curr = curr.left;
17    }
18  }
19
20  /**
21   * @return {number}
22   */
23  next() {
24    const node = this.stack.pop();
25
26    let curr = node.right;
27    while (curr) {
28      this.stack.push(curr);
29      curr = curr.left;
30    }
31
32    return node.val;
33  }
34
35  /**
36   * @return {boolean}
37   */
38  hasNext() {
39    return !!this.stack.length;
40  }
41}
42
43/** 
44 * Your BSTIterator object will be instantiated and called as such:
45 * var obj = new BSTIterator(root)
46 * var param_1 = obj.next()
47 * var param_2 = obj.hasNext()
48 */