1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 */
12class BSTIterator {
13  constructor(root) {
14    this.inorderValues = [];
15    this.currIdx = 0;
16
17    const dfs = (node) => {
18      if (!node) return;
19
20      dfs(node.left);
21      this.inorderValues.push(node.val);
22      dfs(node.right);
23    };
24
25    dfs(root);
26  }
27  /**
28   * @return {number}
29   */
30  next() {
31    return this.inorderValues[this.currIdx++];
32  }
33  /**
34   * @return {boolean}
35   */
36  hasNext() {
37    return this.currIdx < this.inorderValues.length;
38  }
39}
40
41/**
42 * Your BSTIterator object will be instantiated and called as such:
43 * var obj = new BSTIterator(root)
44 * var param_1 = obj.next()
45 * var param_2 = obj.hasNext()
46 */