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
14      let sortedList = new ListNode();
15  let lastNode = sortedList;
16
17  let list1Node = list1;
18  let list2Node = list2;
19
20  while (list1Node && list2Node) {
21    if (list1Node.val < list2Node.val) {
22      const newNode = new ListNode(list1Node.val);
23      lastNode.next = newNode;
24      lastNode = newNode;
25      list1Node = list1Node.next;
26    } else {
27      const newNode = new ListNode(list2Node.val);
28      lastNode.next = newNode;
29      lastNode = newNode;
30      list2Node = list2Node.next;
31    }
32  }
33
34  while (list1Node) {
35    const newNode = new ListNode(list1Node.val);
36    lastNode.next = newNode;
37    lastNode = newNode;
38    list1Node = list1Node.next;
39  }
40
41  while (list2Node) {
42    const newNode = new ListNode(list2Node.val);
43    lastNode.next = newNode;
44    lastNode = newNode;
45    list2Node = list2Node.next;
46  }
47
48  sortedList = sortedList.next;
49  return sortedList;
50};