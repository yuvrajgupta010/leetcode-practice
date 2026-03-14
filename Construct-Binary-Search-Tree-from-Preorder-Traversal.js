1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {number[]} preorder
11 * @return {TreeNode}
12 */
13var bstFromPreorder = function(preorder) {
14    let currIdx = 0;
15  let lastIndex = preorder.length - 1;
16
17  const buildBST = (bound) => {
18    if (currIdx > lastIndex || preorder[currIdx] > bound) {
19      return null;
20    }
21
22    const node = new TreeNode(preorder[currIdx++]);
23    node.left = buildBST(node.val);
24    node.right = buildBST(bound);
25
26    return node;
27  };
28
29  return buildBST(Infinity);
30};