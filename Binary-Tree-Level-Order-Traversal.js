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
11 * @return {number[][]}
12 */
13var levelOrder = function (root) {
14  if (!root) return [];
15  const returnArr = [];
16
17  const dfs = (node, depth) => {
18    if (!node) return;
19
20    if (returnArr.length === depth) {
21      returnArr.push([node.val]);
22    } else {
23      returnArr[depth].push(node.val);
24    }
25
26    dfs(node.left, depth + 1);
27    dfs(node.right, depth + 1);
28  };
29
30  dfs(root, 0);
31  return returnArr;
32};