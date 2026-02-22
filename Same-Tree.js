1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} p
11 * @param {TreeNode} q
12 * @return {boolean}
13 */
14var isSameTree = function (p, q) {
15  if (!p && !q) return true;
16  if (!p || !q) return false;
17  if (p.val !== q.val) return false;
18
19  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
20};