1/**
2 * @param {number[]} groupSizes
3 * @return {number[][]}
4 */
5var groupThePeople = function (groupSizes) {
6  const n = groupSizes.length;
7  const groupSets = new Set(groupSizes);
8  const grouping = {};
9
10  for (let value of groupSets) {
11    grouping[value] = [[]];
12  }
13
14  for (let people = 0; people < n; people++) {
15    const groupSize = groupSizes[people];
16    const lastSet = grouping[groupSize].at(-1);
17    if (lastSet.length === groupSize) {
18      grouping[groupSize].push([people]);
19    } else {
20      lastSet.push(people);
21    }
22  }
23
24  const returnGrouped = [];
25  for (let value of groupSets) {
26    returnGrouped.push(...grouping[value]);
27  }
28
29  // console.log(returnGrouped);
30  return returnGrouped;
31};