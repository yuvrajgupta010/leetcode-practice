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
22      rightNum = n;
23
24    while (leftNum < rightNum) {
25      const midNum = Math.floor((leftNum + rightNum) / 2);
26      if (isBadVersion(midNum)) {
27        rightNum = midNum;
28      } else leftNum = midNum + 1;
29    }
30
31    // console.log(badVersion);
32    return leftNum;
33        };
34};