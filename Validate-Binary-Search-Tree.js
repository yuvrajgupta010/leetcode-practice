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
13var isValidBST = function (root) {
14  const validBST = (minRange, node, maxRange) => {
15    if (!node) return true;
16    if (node.val <= minRange || node.val >= maxRange) {
17      return false;
18    }
19
20    return (
21      validBST(minRange, node.left, node.val) &&
22      validBST(node.val, node.right, maxRange)
23    );
24  };
25
26  return validBST(-Infinity, root, Infinity);
27};