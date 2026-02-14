1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isValid = function (s) {
6  const openClose = new Map([
7    ["{", "}"],
8    ["[", "]"],
9    ["(", ")"],
10  ]);
11  const stack = [];
12
13  for (let char of s) {
14    // open
15    if (openClose.has(char)) {
16      stack.push(openClose.get(char));
17    } else {
18      // close
19      const closeBracket = stack.pop();
20      if (closeBracket !== char) {
21        return false;
22      }
23    }
24  }
25
26  return !stack.length;
27};