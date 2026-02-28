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
11 * @return {TreeNode}
12 */
13var bstToGst = function (root) {
14  const dfsSum = (node, sum) => {
15    if (!node) return sum;
16
17    const rightSum = dfsSum(node.right, sum);
18    node.val = rightSum + node.val;
19    const leftSum = dfsSum(node.left, node.val);
20
21    return leftSum;
22  };
23
24  dfsSum(root, 0);
25  return root;
26};