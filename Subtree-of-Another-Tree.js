1
2const isSame = (left, right) => {
3  if (!left && !right) return true;
4  if (!left || !right) return false;
5  if (left.val !== right.val) return false;
6
7  return isSame(left.left, right.left) && isSame(left.right, right.right);
8};
9
10/**
11 * Definition for a binary tree node.
12 * function TreeNode(val, left, right) {
13 *     this.val = (val===undefined ? 0 : val)
14 *     this.left = (left===undefined ? null : left)
15 *     this.right = (right===undefined ? null : right)
16 * }
17 */
18/**
19 * @param {TreeNode} root
20 * @param {TreeNode} subRoot
21 * @return {boolean}
22 */
23var isSubtree = function (root, subRoot) {
24  let status = false;
25
26  const dfsPreOrder = (node) => {
27    if (status) return;
28    if (isSame(node, subRoot)) {
29      status = true;
30      return;
31    }
32
33    if (node.left) dfsPreOrder(node.left);
34    if (node.right) dfsPreOrder(node.right);
35  };
36
37  dfsPreOrder(root);
38  return status;
39};