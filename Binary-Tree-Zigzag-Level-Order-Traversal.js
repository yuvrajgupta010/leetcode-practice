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
11 * @return {number[][]}
12 */
13var zigzagLevelOrder = function (root) {
14  if (!root) return [];
15  const traversals = [];
16  const rightToLeftQueue = [];
17  const leftToRightQueue = [root];
18  let startFromLeft = true;
19
20  while (rightToLeftQueue.length || leftToRightQueue.length) {
21    if (startFromLeft) {
22      const values = [];
23      while (leftToRightQueue.length) {
24        const node = leftToRightQueue.shift();
25        values.push(node.val);
26        if (node.left) rightToLeftQueue.unshift(node.left);
27        if (node.right) rightToLeftQueue.unshift(node.right);
28      }
29      traversals.push(values);
30    } else {
31      const values = [];
32      while (rightToLeftQueue.length) {
33        const node = rightToLeftQueue.shift();
34        values.push(node.val);
35        if (node.right) leftToRightQueue.unshift(node.right);
36        if (node.left) leftToRightQueue.unshift(node.left);
37      }
38      traversals.push(values);
39    }
40    startFromLeft = !startFromLeft;
41  }
42  return traversals;
43};