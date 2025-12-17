1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7      // numbers.sort((a, b) => a - b);
8  let i = 0,
9    j = numbers.length - 1;
10
11  while (i < j) {
12    const sum = numbers[i] + numbers[j];
13    // console.log(i, j, sum);
14    if (sum === target) break;
15    else if (sum > target) j--;
16    else if (sum < target) i++;
17    // console.log("fdfd");
18  }
19
20  return [i + 1, j + 1];
21};