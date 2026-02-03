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
12var reverseList = function(head) {
13      if (!head || !head.next) return head;
14  let reverseList = null;
15  let nextHead = head;
16  while (nextHead) {
17    let currHead = nextHead;
18    nextHead = nextHead.next;
19    currHead.next = reverseList;
20    reverseList = currHead;
21  }
22  // console.log(reverseList);
23  return reverseList;
24};