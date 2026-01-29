1const mergeArr = (arrA, arrB) => {
2  let sortedArr = [];
3
4  let i = 0;
5  let j = 0;
6  while (i < arrA.length && j < arrB.length) {
7    if (arrA[i] < arrB[j]) {
8      sortedArr.push(arrA[i++]);
9    } else {
10      sortedArr.push(arrB[j++]);
11    }
12  }
13
14  while (i < arrA.length) sortedArr.push(arrA[i++]);
15  while (j < arrB.length) sortedArr.push(arrB[j++]);
16  // console.log(sortedArr);
17  return sortedArr;
18};
19
20
21/**
22 * @param {number[]} nums
23 * @return {number[]}
24 */
25var sortArray = function(nums) {
26     // console.log(arr);
27  if (nums.length <= 1) return nums;
28
29  const midPoint = Math.ceil(nums.length / 2);
30  const leftArr = sortArray(nums.slice(0, midPoint));
31  const rightArr = sortArray(nums.slice(midPoint));
32  const sortedArr = mergeArr(leftArr, rightArr);
33
34  // console.log(sortedArr);
35  return sortedArr;
36
37};