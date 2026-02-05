1/**
2 * Definition for singly-linked list.
3 * function ListNode(val) {
4 *     this.val = val;
5 *     this.next = null;
6 * }
7 */
8
9function findStart(slow, fast) {
10  while (slow !== fast) {
11    slow = slow.next;
12    fast = fast.next;
13  }
14
15  return slow;
16}
17
18/**
19 * @param {ListNode} head
20 * @return {ListNode}
21 */
22var detectCycle = function (head) {
23  let slow = head;
24  let fast = head;
25
26  while (fast && fast.next) {
27    slow = slow.next;
28    fast = fast.next.next;
29
30    if (slow === fast) return findStart(head, fast);
31  }
32
33  return null;  
34};