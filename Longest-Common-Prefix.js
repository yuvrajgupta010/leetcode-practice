1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5var longestCommonPrefix = function(strs) {
6  let longestPrefix = "";
7  strs.sort();
8
9  const lastIdx = strs.length - 1;
10  for (let i = 0; i < Math.min(strs[0].length, strs[lastIdx].length); i++) {
11    if (strs[0][i] === strs[lastIdx][i]) {
12      longestPrefix += strs[0][i];
13    } else {
14      break;
15    }
16  }
17  // console.log(longestPrefix);
18  return longestPrefix;
19
20};