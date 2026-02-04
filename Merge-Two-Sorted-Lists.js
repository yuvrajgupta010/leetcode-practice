1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} list1
10 * @param {ListNode} list2
11 * @return {ListNode}
12 */
13var mergeTwoLists = function(list1, list2) {
14  let sortedList = new ListNode();
15  let lastNode = sortedList;
16
17  while (list1 && list2) {
18    if (list1.val < list2.val) {
19      lastNode.next = list1;
20      list1 = list1.next;
21    } else {
22      lastNode.next = list2;
23      list2 = list2.next;
24    }
25    lastNode = lastNode.next;
26  }
27
28  lastNode.next = list1 || list2;
29
30  return sortedList.next;
31};