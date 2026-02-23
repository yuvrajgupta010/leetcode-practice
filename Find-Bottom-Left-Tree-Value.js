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
11 * @return {number}
12 */
13var findBottomLeftValue = function (root) {
14  if (!root) return null;
15
16  let bottomLeftValue = null;
17  const queue = [root];
18
19  while (queue.length) {
20    // console.log(queue);
21    const levelWidth = queue.length;
22    for (let i = 0; i < levelWidth; i++) {
23      const node = queue.shift();
24      if (!i) bottomLeftValue = node.val;
25      if (node.left) queue.push(node.left);
26      if (node.right) queue.push(node.right);
27    }
28  }
29
30  return bottomLeftValue;
31};