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
11 * @return {number}
12 */
13var diameterOfBinaryTree = function(root) {
14      let diameter = 0;
15
16  const dfs = (node) => {
17    if (!node) return 0;
18
19    const left = dfs(node.left);
20    const right = dfs(node.right);
21
22    diameter = Math.max(diameter, left + right);
23
24    return 1 + Math.max(left, right);
25  };
26
27  dfs(root);
28  return diameter;
29};