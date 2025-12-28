1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var findDisappearedNumbers = function(nums) {
6    for (let i = 0; i < nums.length; i++) {
7        while (nums[i] !== nums[nums[i] - 1]) {
8            const temp = nums[i];
9            nums[i] = nums[temp - 1];
10            nums[temp - 1] = temp;
11        }
12    }
13
14    const result = [];
15    for (let i = 0; i < nums.length; i++) {
16        if (nums[i] !== i + 1) result.push(i + 1);
17    }
18    return result;
19   
20};