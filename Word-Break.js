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
14  insert(str) {
15    let curr = this.root;
16
17    for (let i = 0; i < str.length; i++) {
18      const idx = str.charCodeAt(i) - 97;
19
20      if (!curr.childrens[idx]) {
21        curr.childrens[idx] = new Node();
22      }
23
24      curr = curr.childrens[idx];
25    }
26
27    curr.eow = true;
28  }
29
30  search(str) {
31    let n = str.length;
32    let i = 0;
33
34    let curr = this.root;
35    while (i < n) {
36      const childNodeIdx = str.charCodeAt(i) - 97;
37      const childNode = curr.childrens[childNodeIdx];
38
39      if (!childNode) return false;
40      curr = childNode;
41      i++;
42    }
43
44    return curr.eow;
45  }
46}
47
48/**
49 * @param {string} s
50 * @param {string[]} wordDict
51 * @return {boolean}
52 */
53var wordBreak = function (s, wordDict) {
54  if (!s.length) return false;
55  const trie = new Trie();
56
57  for (let word of wordDict) {
58    trie.insert(word);
59  }
60
61  const memo = new Map();
62  const dfs = (str) => {
63    if (str.length === 0) return true;
64
65    if (memo.has(str)) return memo.get(str);
66
67    for (let i = 1; i <= str.length; i++) {
68      const subStr = str.substring(0, i);
69
70      if (trie.search(subStr) && dfs(str.substring(i))) {
71        memo.set(str, true);
72        return true;
73      }
74    }
75
76    memo.set(str, false);
77    return false;
78  };
79
80  return dfs(s);
81};