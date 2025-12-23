1/**
2 * Definition for isBadVersion()
3 * 
4 * @param {integer} version number
5 * @return {boolean} whether the version is bad
6 * isBadVersion = function(version) {
7 *     ...
8 * };
9 */
10
11/**
12 * @param {function} isBadVersion()
13 * @return {function}
14 */
15var solution = function(isBadVersion) {
16    /**
17     * @param {integer} n Total versions
18     * @return {integer} The first bad version
19     */
20    return function(n) {
21    let leftNum = 1,
22      rightNum = n,
23      badVersion = null;
24
25    while (leftNum <= rightNum) {
26      const midNum = Math.floor((leftNum + rightNum) / 2);
27      if (isBadVersion(midNum)) {
28        rightNum = midNum;
29        badVersion = midNum;
30        if (leftNum === rightNum) break;
31      } else leftNum = midNum + 1;
32    }
33
34    // console.log(badVersion);
35    return badVersion;
36    };
37};