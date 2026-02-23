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
13var levelOrder = function (root) {
14  if (!root) return [];
15  const returnArr = [];
16  const queue = [root];
17
18  while (queue.length) {
19    const levelWidth = queue.length;
20    const orderArr = [];
21    for (let i = 0; i < levelWidth; i++) {
22      const node = queue.shift();
23      orderArr.push(node.val);
24      if (node.left) queue.push(node.left);
25      if (node.right) queue.push(node.right);
26    }
27    returnArr.push(orderArr);
28  }
29
30  return returnArr;
31};