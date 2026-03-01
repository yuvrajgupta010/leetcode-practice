1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {number[]} inorder
11 * @param {number[]} postorder
12 * @return {TreeNode}
13 */
14var buildTree = function (inorder, postorder) {
15  let preIdx = postorder.length - 1;
16
17  const searchIdx = (value, leftIdx, rightIdx) => {
18    while (leftIdx <= rightIdx) {
19      if (value === inorder[leftIdx]) return leftIdx;
20      leftIdx++;
21    }
22  };
23
24  function makeTree(leftIdx, rightIdx) {
25    if (leftIdx > rightIdx) {
26      return null;
27    }
28
29    const root = new TreeNode(postorder[preIdx]);
30
31    const rootIdx = searchIdx(postorder[preIdx], leftIdx, rightIdx);
32
33    preIdx--;
34
35    root.right = makeTree(rootIdx + 1, rightIdx);
36    root.left = makeTree(leftIdx, rootIdx - 1);
37
38    return root;
39  }
40
41  return makeTree(0, postorder.length - 1);
42};