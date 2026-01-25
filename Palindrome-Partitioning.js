1const isPandirom = (str) => {
2  let i = 0;
3  let j = str.length - 1;
4
5  while (i <= j) {
6    if (str[i] !== str[j]) return false;
7    i++;
8    j--;
9  }
10
11  return true;
12};
13
14const findPandirom = (str, collectionOfPandirom, allPandirom) => {
15  if (!str.length) {
16    allPandirom.push([...collectionOfPandirom]);
17  }
18
19  for (let i = 0; i < str.length; i++) {
20    const strPart = str.substring(0, i + 1);
21    if (isPandirom(strPart)) {
22      // console.log("first");
23      collectionOfPandirom.push(strPart);
24      findPandirom(str.substring(i + 1), collectionOfPandirom, allPandirom);
25      collectionOfPandirom.pop();
26    }
27  }
28};
29
30/**
31 * @param {string} s
32 * @return {string[][]}
33 */
34var partition = function (s) {
35  const returnArr = [];
36
37  findPandirom(s, [], returnArr);
38  // console.log(returnArr);
39  return returnArr;
40};