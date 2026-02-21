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
13var isSymmetric = function (root) {
14  if (!root) return true;
15
16  const isMirror = (left, right) => {
17    if (!left && !right) return true;
18    if (!left || !right) return false;
19    if (left.val !== right.val) return false;
20
21    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
22  };
23
24  return isMirror(root.left, root.right);
25};