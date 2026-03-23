1/**
2 * // Definition for a _Node.
3 * function _Node(val, neighbors) {
4 *    this.val = val === undefined ? 0 : val;
5 *    this.neighbors = neighbors === undefined ? [] : neighbors;
6 * };
7 */
8
9/**
10 * @param {_Node} node
11 * @return {_Node}
12 */
13var cloneGraph = function (node) {
14  if (!node) return node;
15  const queue = [];
16  const map = new Map();
17  queue.push(node);
18
19  while (queue.length) {
20    const originalNode = queue.shift();
21    const clonedNode = new _Node(originalNode.val);
22
23    for (let v of originalNode.neighbors) {
24      clonedNode.neighbors.push(v.val);
25      if (!map.has(v.val)) queue.push(v);
26    }
27
28    map.set(clonedNode.val, clonedNode);
29  }
30
31  for (let [_, node] of map) {
32    const neighbors = node.neighbors;
33
34    for (let index = 0; index < neighbors.length; index++) {
35      const val = neighbors[index];
36      neighbors[index] = map.get(val);
37    }
38  }
39
40  return map.get(node.val);
41};