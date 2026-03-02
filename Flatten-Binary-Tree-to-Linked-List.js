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
13var flatten = function (root) {
14  let dummyNode = new TreeNode();
15
16  const dfsFlat = (node) => {
17    if (!node) return null;
18
19    dummyNode.right = node;
20    const [leftSave, rightSave] = [node.left, node.right];
21    dummyNode = node;
22    node.left = null;
23    node.right = null;
24
25    dfsFlat(leftSave);
26    dfsFlat(rightSave);
27  };
28
29  dfsFlat(root);
30};