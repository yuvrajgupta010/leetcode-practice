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
11 * @return {void} Do not return anything, modify root in-place instead.
12 */
13var recoverTree = function (root) {
14  const sortedArr = [];
15
16  function dfs(node) {
17    if (!node) return;
18
19    dfs(node.left);
20    sortedArr.push(node);
21    dfs(node.right);
22  }
23  dfs(root);
24
25  let first;
26  let second;
27  for (let i = 0; i < sortedArr.length - 1; i += 1) {
28    if (sortedArr[i].val > sortedArr[i + 1].val) {
29      if (!first) {
30        first = sortedArr[i];
31      }
32      second = sortedArr[i + 1];
33    }
34  }
35
36  const temp = first.val;
37  first.val = second.val;
38  second.val = temp;
39};