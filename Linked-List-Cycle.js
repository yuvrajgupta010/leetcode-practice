1/**
2 * Definition for singly-linked list.
3 * function ListNode(val) {
4 *     this.val = val;
5 *     this.next = null;
6 * }
7 */
8
9/**
10 * @param {ListNode} head
11 * @return {boolean}
12 */
13var hasCycle = function(head) {
14  let slow = head;
15  let fast = head;
16
17  while (fast && fast.next) {
18    slow = slow.next;
19    fast = fast.next.next;
20
21    if (slow === fast) return true;
22  }
23
24  return false;
25
26};