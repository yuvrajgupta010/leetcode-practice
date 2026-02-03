1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @return {ListNode}
11 */
12var middleNode = function(head) {
13      if (!head) return head;
14
15  let totalLength = 0;
16  let currentNode = head;
17  while (currentNode) {
18    currentNode = currentNode.next;
19    totalLength++;
20  }
21
22  const midIndex = Math.floor(totalLength / 2);
23  let j = 0;
24  let node = head;
25  while (j < midIndex) {
26    node = node.next;
27    j++;
28  }
29
30//   console.log(node);
31  return node;
32};