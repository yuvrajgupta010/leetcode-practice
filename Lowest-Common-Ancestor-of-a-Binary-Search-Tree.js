1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val) {
4 *     this.val = val;
5 *     this.left = this.right = null;
6 * }
7 */
8
9/**
10 * @param {TreeNode} root
11 * @param {TreeNode} p
12 * @param {TreeNode} q
13 * @return {TreeNode}
14 */
15var lowestCommonAncestor = function (root, p, q) {
16  let commonAncestor = null;
17  let min = Math.min(p.val, q.val);
18  let max = Math.max(p.val, q.val);
19
20  const dfs = (curr, currMin, currMax) => {
21    if (commonAncestor || !curr) return null;
22    if (currMin > min && currMax < max) return null;
23
24    let currNodePorQ = null;
25    if (curr === p || curr === q) {
26      currNodePorQ = curr;
27    }
28
29    const leftNode = dfs(curr.left, currMin, curr.val);
30    const rightNode = dfs(curr.right, curr.val, currMax);
31
32    if (
33      (leftNode && rightNode) ||
34      (currNodePorQ && leftNode) ||
35      (currNodePorQ && rightNode)
36    ) {
37      commonAncestor = curr;
38    }
39
40    return currNodePorQ || leftNode || rightNode;
41  };
42
43  dfs(root, -Infinity, Infinity);
44
45  return commonAncestor;
46};