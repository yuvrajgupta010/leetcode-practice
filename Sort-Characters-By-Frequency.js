1/**
2 * @param {string} s
3 * @return {string}
4 */
5var frequencySort = function(s) {
6  let frequencyCounter = new Map();
7  let frequencySort = [];
8  let returnStr = "";
9
10  for (let char of s) {
11    frequencyCounter.set(char, (frequencyCounter.get(char) || 0) + 1);
12  }
13
14  for (let [char, count] of frequencyCounter) {
15    frequencySort[count] = frequencySort[count] || [];
16    frequencySort[count].push(char);
17  }
18
19  for (let i = frequencySort.length - 1; i >= 0; i--) {
20    if (frequencySort[i]) {
21      for (let j of frequencySort[i]) {
22        returnStr += j.repeat(i);
23      }
24    }
25  }
26
27  //   console.log(frequencyCounter);
28  console.log(returnStr);
29  return returnStr;
30};