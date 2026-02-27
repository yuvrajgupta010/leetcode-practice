1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val) {
4 *     this.val = val;
5 *     this.left = this.right = null;
6 * }
7 */
8/**
9 * @param {TreeNode} root
10 * @param {TreeNode} p
11 * @param {TreeNode} q
12 * @return {TreeNode}
13 */
14var lowestCommonAncestor = function(root, p, q) {
15      if (root === null) return null;
16
17  if (root === p || root === q) {
18    return root;
19  }
20
21  const leftChild = lowestCommonAncestor(root.left, p, q);
22  const rightChild = lowestCommonAncestor(root.right, p, q);
23
24  if (leftChild && rightChild) {
25    return root;
26  } else if (!leftChild && !rightChild) {
27    return null;
28  } else if (leftChild !== null) {
29    return leftChild;
30  } else if (rightChild !== null) {
31    return rightChild;
32  }
33};