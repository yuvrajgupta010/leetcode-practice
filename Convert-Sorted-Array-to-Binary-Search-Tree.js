1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {number[]} nums
11 * @return {TreeNode}
12 */
13var sortedArrayToBST = function (nums) {
14  let root = null;
15
16  const dfsPreOrder = (parent, l, r, isLeft) => {
17    // console.log({ parent, l, r });
18    if (l > r) return;
19    const midIdx = Math.floor((l + r) / 2);
20    const node = new TreeNode(nums[midIdx]);
21    parent[isLeft ? "left" : "right"] = node;
22    dfsPreOrder(node, l, midIdx - 1, true);
23    dfsPreOrder(node, midIdx + 1, r, false);
24  };
25
26  const midIdx = Math.floor(nums.length / 2);
27  root = new TreeNode(nums[midIdx]);
28
29  // left
30  dfsPreOrder(root, 0, midIdx - 1, true);
31  // right
32  dfsPreOrder(root, midIdx + 1, nums.length - 1, false);
33
34  return root;
35};