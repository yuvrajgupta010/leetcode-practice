1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6  const map = new Map();
7
8  for (let str of strs) {
9    const freq = Array(26).fill(0);
10
11    for (let char of str) {
12      freq[char.charCodeAt(0) - 97]++;
13    }
14
15    const key = freq.join("#");
16
17    if (!map.has(key)) {
18      map.set(key, []);
19    }
20    map.get(key).push(str);
21  }
22
23  return Array.from(map.values());
24}