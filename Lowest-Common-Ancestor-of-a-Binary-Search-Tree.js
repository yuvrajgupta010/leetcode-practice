1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val) {
4 *     this.val = val;
5 *     this.left = this.right = null;
6 * }
7 */
8
9/**
10 * @param {TreeNode} root
11 * @param {TreeNode} p
12 * @param {TreeNode} q
13 * @return {TreeNode}
14 */
15var lowestCommonAncestor = function (root, p, q) {
16  if (root.val > p.val && root.val > q.val)
17    return lowestCommonAncestor(root.left, p, q);
18
19  if (root.val < p.val && root.val < q.val)
20    return lowestCommonAncestor(root.right, p, q);
21
22  return root;
23};