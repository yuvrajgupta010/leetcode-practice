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
11 * @param {number} k
12 * @return {number}
13 */
14var kthSmallest = function (root, k) {
15  if (!root) return null;
16
17  let order = 1;
18  let returnValue = null;
19
20  const dfsInorder = (node) => {
21    if (returnValue) return null;
22    if (node.left) dfsInorder(node.left);
23    if (order === k) {
24      returnValue = node.val;
25    }
26    order++;
27    if (node.right) dfsInorder(node.right);
28  };
29
30  dfsInorder(root);
31
32  return returnValue;
33};