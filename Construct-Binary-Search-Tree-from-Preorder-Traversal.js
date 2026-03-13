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
14  const makeBST = (startIdx, endIdx) => {
15    if (startIdx === endIdx) {
16      return new TreeNode(preorder[startIdx]);
17    }
18
19    const currValue = preorder[startIdx];
20    const node = new TreeNode(currValue);
21
22    let greaterIdx = null;
23    for (let i = startIdx + 1; i <= endIdx; i++) {
24      if (currValue < preorder[i]) {
25        greaterIdx = i;
26        break;
27      }
28    }
29
30    const leftEndIdx = greaterIdx ? greaterIdx - 1 : endIdx;
31    if (startIdx + 1 <= leftEndIdx) {
32      node.left = makeBST(startIdx + 1, leftEndIdx);
33    }
34    if (greaterIdx) {
35      node.right = makeBST(greaterIdx, endIdx);
36    }
37
38    return node;
39  };
40
41  return makeBST(0, preorder.length - 1);
42};