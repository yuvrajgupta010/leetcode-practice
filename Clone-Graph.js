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
15  const createdNodes = [];
16  const queue = [node];
17
18  while (queue.length) {
19    const oldNode = queue.shift();
20    const newNode = new _Node(oldNode.val);
21    createdNodes[oldNode.val] = newNode;
22
23    for (let adjacentNode of oldNode.neighbors) {
24      newNode.neighbors.push(adjacentNode.val);
25      if (!createdNodes[adjacentNode.val]) {
26        queue.push(adjacentNode);
27      }
28    }
29  }
30
31  for (let j = 1; j < createdNodes.length; j++) {
32    let neighbors = createdNodes[j].neighbors;
33    for (let i = 0; i < neighbors.length; i++) {
34      neighbors[i] = createdNodes[neighbors[i]];
35    }
36  }
37
38  return createdNodes[1];
39};