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
11 * @return {number[]}
12 */
13var preorderTraversal = function (root) {
14  const visitedNodes = [];
15
16  if (!root) return visitedNodes;
17
18  const dfs = (node) => {
19    visitedNodes.push(node.val);
20    if (node.left) dfs(node.left);
21    if (node.right) dfs(node.right);
22  };
23
24  dfs(root);
25
26  return visitedNodes;
27};