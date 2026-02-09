1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} l1
10 * @param {ListNode} l2
11 * @return {ListNode}
12 */
13var addTwoNumbers = function(l1, l2) {
14  let l1Curr = l1;
15  let l2Curr = l2;
16  let lastCarry = 0;
17
18  let dummy = new ListNode(-1, null);
19  let lastNode = dummy;
20
21  while (l1Curr || l2Curr) {
22    let l1CurrVal = l1Curr ? l1Curr.val : 0;
23    let l2CurrVal = l2Curr ? l2Curr.val : 0;
24
25    let sum = l1CurrVal + l2CurrVal + lastCarry;
26
27    let isSumDoubleDigit = sum > 9;
28    lastCarry = isSumDoubleDigit ? Math.floor(sum / 10) : 0;
29    let currDigit = isSumDoubleDigit ? sum % 10 : sum;
30
31    lastNode.next = new ListNode(currDigit);
32    // console.log(lastNode, lastCarry);
33    lastNode = lastNode.next;
34
35    l1Curr = l1Curr?.next ?? null;
36    l2Curr = l2Curr?.next ?? null;
37  }
38
39  if (lastCarry) {
40    lastNode.next = new ListNode(lastCarry);
41    lastNode = lastNode.next;
42  }
43
44  // console.log(dummy.next);
45  return dummy.next;
46};