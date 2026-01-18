1/**
2 * @param {string} s
3 * @param {string} part
4 * @return {string}
5 */
6var removeOccurrences = function(s, part) {
7  let leftSubStr = s;
8
9  while (true) {
10    if (!leftSubStr.includes(part)) break;
11    leftSubStr = leftSubStr.replace(part, "");
12  }
13
14  // console.log(leftSubStr);
15  return leftSubStr;
16};