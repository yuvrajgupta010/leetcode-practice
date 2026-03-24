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
18  map.set(node, new _Node(node.val));
19
20  while (queue.length) {
21    const originalNode = queue.shift();
22    const clonedNode = map.get(originalNode);
23
24    for (let v of originalNode.neighbors) {
25      let neighboreNode = map.get(v);
26      if (!neighboreNode) {
27        neighboreNode = new _Node(v.val);
28        map.set(v, neighboreNode);
29        queue.push(v);
30      }
31
32      clonedNode.neighbors.push(neighboreNode);
33    }
34  }
35
36  return map.get(node);
37};