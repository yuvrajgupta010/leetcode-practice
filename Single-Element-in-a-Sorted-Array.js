1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNonDuplicate = function(nums) {
6    let left = 0;
7    let right = nums.length - 1;
8
9    while (left < right) {
10        let mid = left + Math.floor((right - left) / 2);
11
12        if (mid % 2 === 1) {
13            mid--;
14        }
15
16        if (nums[mid] === nums[mid + 1]) {
17            left = mid + 2;
18        } else {
19            right = mid;
20        }
21    }
22
23    return nums[left]; 
24};