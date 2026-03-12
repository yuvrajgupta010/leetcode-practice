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
13var inorderTraversal = function (root) {
14  const visitedNodes = [];
15
16  let curr = root;
17
18  while (curr) {
19    if (!curr.left) {
20      visitedNodes.push(curr.val);
21      curr = curr.right;
22      continue;
23    }
24
25    let IP = curr.left;
26    while (IP.right !== null && IP.right !== curr) {
27      IP = IP.right;
28    }
29
30    if (!IP.right) {
31      IP.right = curr;
32      curr = curr.left;
33    } else {
34      IP.right = null;
35      visitedNodes.push(curr.val);
36      curr = curr.right;
37    }
38  }
39
40  return visitedNodes;
41};