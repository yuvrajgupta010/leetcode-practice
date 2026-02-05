1const reverseLL = (head) => {
2  let currHead = head;
3  let lastHead = null;
4
5  while (currHead) {
6    const nextHead = currHead.next;
7    currHead.next = lastHead;
8    lastHead = currHead;
9    currHead = nextHead;
10  }
11
12  return lastHead;
13};
14
15/**
16 * Definition for singly-linked list.
17 * function ListNode(val, next) {
18 *     this.val = (val===undefined ? 0 : val)
19 *     this.next = (next===undefined ? null : next)
20 * }
21 */
22/**
23 * @param {ListNode} head
24 * @return {boolean}
25 */
26var isPalindrome = function(head) {
27  let slow = head;
28  let fast = head;
29
30  while (fast.next && fast.next.next) {
31    slow = slow.next;
32    fast = fast.next.next;
33  }
34
35  // console.log(slow.next);
36  const halfReverse = reverseLL(slow.next);
37  // console.log(halfReverse);
38
39  let leftHead = head;
40  let rightHead = halfReverse;
41
42  while (rightHead) {
43    // console.log({ left: leftHead.val, right: rightHead.val });
44    if (leftHead.val !== rightHead.val) return false;
45    leftHead = leftHead.next;
46    rightHead = rightHead.next;
47  }
48
49  // console.log(slow);
50  return true;
51};