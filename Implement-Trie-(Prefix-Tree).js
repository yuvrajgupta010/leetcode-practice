1
2class Node {
3  constructor() {
4    this.childrens = Array.from({ length: 26 }, () => null);
5    this.eow = false;
6  }
7}
8
9class Trie {
10  constructor() {
11    this.root = new Node();
12  }
13
14  insert(word) {
15    let i = 0;
16    let n = word.length;
17
18    let curr = this.root;
19    while (i < n) {
20      const childIdx = word.charCodeAt(i) - 97;
21      const childNode = curr.childrens[childIdx];
22
23      if (!childNode) {
24        curr.childrens[childIdx] = new Node();
25      }
26
27      curr = curr.childrens[childIdx];
28      i++;
29    }
30
31    curr.eow = true;
32  }
33
34  search(word) {
35    let i = 0;
36    let n = word.length;
37
38    let curr = this.root;
39    while (i < n) {
40      const childIdx = word.charCodeAt(i) - 97;
41      const childNode = curr.childrens[childIdx];
42
43      if (!childNode) return false;
44      curr = childNode;
45      i++;
46    }
47
48    return curr.eow;
49  }
50
51  startsWith(str) {
52    let i = 0;
53    let n = str.length;
54
55    let curr = this.root;
56    while (i < n) {
57      const childIdx = str.charCodeAt(i) - 97;
58      const childNode = curr.childrens[childIdx];
59
60      if (!childNode) break;
61      curr = childNode;
62      i++;
63    }
64
65    return i === n;
66  }
67}
68
69/**
70 * Your Trie object will be instantiated and called as such:
71 * var obj = new Trie()
72 * obj.insert(word)
73 * var param_2 = obj.search(word)
74 * var param_3 = obj.startsWith(prefix)
75 */