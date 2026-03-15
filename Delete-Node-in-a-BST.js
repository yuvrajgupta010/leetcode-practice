1const rightMostOfTheTree = (node) => {
2  let curr = node;
3  while (curr.right) {
4    curr = curr.right;
5  }
6  return curr;
7};
8
9const leftMostOfTheTree = (node) => {
10  let curr = node;
11  while (curr.left) {
12    curr = curr.left;
13  }
14  return curr;
15};
16
17/**
18 * Definition for a binary tree node.
19 * function TreeNode(val, left, right) {
20 *     this.val = (val===undefined ? 0 : val)
21 *     this.left = (left===undefined ? null : left)
22 *     this.right = (right===undefined ? null : right)
23 * }
24 */
25/**
26 * @param {TreeNode} root
27 * @param {number} key
28 * @return {TreeNode}
29 */
30var deleteNode = function (root, key) {
31  if (!root) return root;
32  let prevNode = null;
33  let curr = root;
34  while (curr) {
35    if (curr.val > key) {
36      prevNode = curr;
37      curr = curr.left;
38    } else if (curr.val < key) {
39      prevNode = curr;
40      curr = curr.right;
41    } else {
42      if (!prevNode) {
43        if (!curr.left) {
44          root = curr.right;
45        } else {
46          const saveRight = curr.right;
47          const rightMostNode = rightMostOfTheTree(curr.left);
48          rightMostNode.right = saveRight;
49          root = curr.left;
50        }
51      } else {
52        if (prevNode.val > curr.val) {
53          // move to left from root
54          const saveLeft = curr.left;
55          if (curr.right) {
56            const leftMostNode = leftMostOfTheTree(curr.right);
57            leftMostNode.left = saveLeft;
58            prevNode.left = curr.right;
59          } else {
60            prevNode.left = saveLeft;
61          }
62        } else {
63          // move to right from root
64          const saveRight = curr.right;
65          if (curr.left) {
66            const rightMostNode = rightMostOfTheTree(curr.left);
67            rightMostNode.right = saveRight;
68            prevNode.right = curr.left;
69          } else {
70            prevNode.right = saveRight;
71          }
72        }
73      }
74      break;
75    }
76  }
77
78  return root;
79};