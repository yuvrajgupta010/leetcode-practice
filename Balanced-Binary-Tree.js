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
11 * @return {boolean}
12 */
13var isBalanced = function (root) {
14  let status = true;
15
16  function dfs(node) {
17    if (!node) return 0;
18
19    const leftLength = dfs(node.left);
20    const rightLenght = dfs(node.right);
21
22    if (Math.abs(leftLength - rightLenght) > 1) status = false;
23
24    return 1 + Math.max(leftLength, rightLenght);
25  }
26
27  dfs(root);
28  return status;
29};