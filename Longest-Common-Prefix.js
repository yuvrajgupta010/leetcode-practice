1class Node {
2  constructor() {
3    this.childrens = [];
4    this.eow = false;
5    this.childsCount = 0;
6  }
7}
8
9class Trie {
10  constructor() {
11    this.root = new Node();
12  }
13
14  add(str) {
15    // if (!str.length) return;
16    let i = 0;
17    let n = str.length;
18
19    let curr = this.root;
20    while (i < n) {
21      const childIdx = str.charCodeAt(i) - 97;
22      const childNode = curr.childrens[childIdx];
23
24      if (childNode) {
25        curr = childNode;
26      } else {
27        curr.childrens[childIdx] = new Node();
28        curr.childsCount++;
29        curr = curr.childrens[childIdx];
30      }
31      i++;
32    }
33    curr.eow = true;
34  }
35}
36
37/**
38 * @param {string[]} strs
39 * @return {string}
40 */
41var longestCommonPrefix = function (strs) {
42  const trie = new Trie();
43  for (let word of strs) {
44    trie.add(word);
45  }
46
47  const firstStr = strs[0];
48  let i = 0;
49  let n = firstStr.length;
50  let numOfCommonChar = 0;
51
52  let curr = trie.root;
53  while (i < n) {
54    if (curr.childsCount > 1 || curr.eow) break;
55    // numOfCommonChar++;
56
57    const childIdx = firstStr.charCodeAt(i) - 97;
58    curr = curr.childrens[childIdx];
59    i++;
60  }
61
62  return firstStr.substring(0, i);
63};