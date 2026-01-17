1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5var longestCommonPrefix = function(strs) {
6      let longestPrefix = strs[0];
7
8  for (let i = 1; i < strs.length; i++) {
9    if (!longestPrefix.length) break;
10
11    let updatedPrefix = "";
12
13    for (let j = 0; j < longestPrefix.length; j++) {
14      if (longestPrefix[j] === strs[i][j]) updatedPrefix += longestPrefix[j];
15      else {
16        longestPrefix = updatedPrefix;
17        continue;
18      }
19    }
20  }
21
22//   console.log(longestPrefix);
23  return longestPrefix;
24};