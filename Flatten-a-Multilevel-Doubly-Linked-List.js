1/**
2 * // Definition for a _Node.
3 * function _Node(val,prev,next,child) {
4 *    this.val = val;
5 *    this.prev = prev;
6 *    this.next = next;
7 *    this.child = child;
8 * };
9 */
10
11/**
12 * @param {_Node} head
13 * @return {_Node}
14 */
15var flatten = function(head) {
16  const flattenNode = (head) => {
17    let currentNode = head;
18    let lastNode = null;
19
20    while (currentNode) {
21      let saveNext = currentNode.next;
22
23      if (currentNode.child) {
24        let childTail = flattenNode(currentNode.child);
25
26        currentNode.next = currentNode.child;
27        currentNode.child.prev = currentNode;
28        currentNode.child = null;
29
30        if (saveNext) {
31          childTail.next = saveNext;
32          saveNext.prev = childTail;
33        }
34
35        lastNode = childTail;
36      } else {
37        lastNode = currentNode;
38      }
39
40      currentNode = saveNext;
41    }
42
43    return lastNode;
44  };
45
46  if (head) flattenNode(head, null);
47  return head;
48};