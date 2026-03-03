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
15
16  const result = [];
17  const queue = [root];
18  let leftToRight = true;
19
20  while (queue.length) {
21    const size = queue.length;
22    const level = [];
23
24    for (let i = 0; i < size; i++) {
25      const node = queue.shift();
26
27      if (leftToRight) {
28        level.push(node.val);
29      } else {
30        level.unshift(node.val); // only small array per level
31      }
32
33      if (node.left) queue.push(node.left);
34      if (node.right) queue.push(node.right);
35    }
36
37    result.push(level);
38    leftToRight = !leftToRight;
39  }
40
41  return result;
42};