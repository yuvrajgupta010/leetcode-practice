1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @param {number} k
11 * @return {ListNode}
12 */
13var rotateRight = function (head, k) {
14  if (!head || !head.next) return head;
15  let currHead = head;
16  let length = 0;
17  let currTail = null;
18  // find tail
19  let curr = currHead;
20  while (curr) {
21    if (!curr.next) {
22      currTail = curr;
23    }
24    curr = curr.next;
25    length++;
26  }
27  // console.log(length);
28
29  for (let i = 0; i < k % length; i++) {
30    let curr = currHead;
31    while (curr.next !== currTail) {
32      curr = curr.next;
33    }
34    currTail.next = currHead;
35    currHead = currTail;
36
37    currTail = curr;
38    currTail.next = null;
39  }
40
41  return currHead;
42};