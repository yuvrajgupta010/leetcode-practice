1/**
2 * @param {string} s
3 * @return {string}
4 */
5var reverseWords = function(s) {
6      return s
7    .split(" ")
8    .map((str) => str.trim())
9    .filter((str) => str.length)
10    .reverse()
11    .join(" ");
12};