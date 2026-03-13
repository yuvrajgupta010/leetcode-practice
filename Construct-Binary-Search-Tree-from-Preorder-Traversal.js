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
13var bstFromPreorder = function (preorder) {
14  const makeBST = (start, end) => {
15    if (start > end) return null;
16
17    const root = new TreeNode(preorder[start]);
18
19    let split = start + 1;
20    while (split <= end && preorder[split] < preorder[start]) {
21      split++;
22    }
23
24    root.left = makeBST(start + 1, split - 1);
25    root.right = makeBST(split, end);
26
27    return root;
28  };
29
30  return makeBST(0, preorder.length - 1);
31};