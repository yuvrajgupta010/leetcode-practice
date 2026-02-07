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
16     const flattenNode = (head, savedNode) => {
17    let currentNode = head;
18    while (currentNode) {
19      if (currentNode.child) {
20        let saveNextNode = currentNode.next;
21        let flatChild = flattenNode(currentNode.child, saveNextNode);
22        currentNode.next = flatChild;
23        flatChild.prev = currentNode;
24        currentNode.child = null;
25      } else {
26        if (currentNode.next === null && savedNode) {
27          currentNode.next = savedNode;
28          savedNode.prev = currentNode;
29          savedNode = null;
30        }
31      }
32
33      currentNode = currentNode.next;
34      // console.log(head, "head");
35    }
36    return head;
37  };
38
39  return flattenNode(head, null);
40};