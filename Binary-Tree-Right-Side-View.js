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
11 * @return {number[]}
12 */
13var rightSideView = function (root) {
14  const rightViewValues = [];
15  if (!root) return rightViewValues;
16  const queue = [root];
17
18  let levelSize = 1;
19  while (levelSize) {
20    const node = queue.shift();
21    if (levelSize === 1) rightViewValues.push(node.val);
22    levelSize--;
23
24    if (node.left) queue.push(node.left);
25    if (node.right) queue.push(node.right);
26
27    if (levelSize === 0) {
28      levelSize = queue.length;
29    }
30  }
31
32  return rightViewValues;
33};