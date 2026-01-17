1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
7  // console.log(s);
8  let i = 0;
9  let j = s.length - 1;
10
11  while (i <= j) {
12    // console.log({ i: s[i], j: s[j] });
13    if (s[i++] !== s[j--]) return false;
14  }
15
16  return true;
17};