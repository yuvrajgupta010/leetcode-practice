1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @return {boolean}
11 */
12var isPalindrome = function(head) {
13  let stringForPalindrome = "";
14
15  let currentNode = head;
16  while (currentNode) {
17    stringForPalindrome += currentNode.val;
18    currentNode = currentNode.next;
19  }
20
21  let i = 0;
22  let j = stringForPalindrome.length - 1;
23  while (i <= j) {
24    if (stringForPalindrome[i] !== stringForPalindrome[j]) return false;
25    i++;
26    j--;
27  }
28
29  return true;
30
31};