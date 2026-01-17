1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6  const str = s.replace(/[^a-zA-Z0-9]/g, "");
7  // console.log(str);
8  let i = 0;
9  let j = str.length - 1;
10
11  while (i <= j) {
12    // console.log({ i: str[i], j: str[j] });
13    if (str[i++].toLowerCase() !== str[j--].toLowerCase()) return false;
14  }
15
16  return true;
17};