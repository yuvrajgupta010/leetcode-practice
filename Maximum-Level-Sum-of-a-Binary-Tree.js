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
13var maxLevelSum = function (root) {
14  if (!root) return null;
15  const queue = [root];
16  let maxSum = -Infinity;
17  let minDepth = 1;
18
19  let currDepth = 1;
20  while (queue.length) {
21    let levelSum = 0;
22    let n = queue.length;
23
24    while (n--) {
25      const node = queue.shift();
26      levelSum += node.val;
27      if (node.left) queue.push(node.left);
28      if (node.right) queue.push(node.right);
29    }
30
31    if (levelSum > maxSum) {
32      maxSum = levelSum;
33      minDepth = currDepth;
34    }
35
36    currDepth++;
37  }
38
39  return minDepth;
40};