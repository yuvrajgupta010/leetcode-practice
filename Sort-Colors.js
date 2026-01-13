1/**
2 * @param {number[]} nums
3 * @return {void} Do not return anything, modify nums in-place instead.
4 */
5var sortColors = function (nums) {
6  let numOfZero = 0;
7  let numOfOne = 0;
8  let numOfTwo = 0;
9
10  for (let num of nums) {
11    // if (num === 0) numOfZero++;
12    // if (num === 1) numOfOne++;
13    // if (num === 2) numOfTwo++;
14
15    switch (num) {
16      case 0:
17        numOfZero++;
18        break;
19      case 1:
20        numOfOne++;
21        break;
22      case 2:
23        numOfTwo++;
24        break;
25      default:
26        break;
27    }
28  }
29
30  let position = 0;
31  while (numOfZero) {
32    nums[position] = 0;
33    position++;
34    numOfZero--;
35  }
36  while (numOfOne) {
37    nums[position] = 1;
38    position++;
39    numOfOne--;
40  }
41  while (numOfTwo) {
42    nums[position] = 2;
43    position++;
44    numOfTwo--;
45  }
46
47  // console.log({ numOfOne, numOfTwo, numOfZero, nums });
48};