1/**
2 * @param {string} s
3 * @return {string}
4 */
5var frequencySort = function(s) {
6    let frequencyCounter = new Map();
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
22        let numOftime = i;
23        while (numOftime > 0) {
24          returnStr += j;
25          numOftime--;
26        }
27      }
28    }
29  }
30
31//   console.log(frequencyCounter);
32//   console.log(returnStr);
33return returnStr;
34};