1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var subsetsWithDup = function(nums) {
6        const ans = [];
7    nums.sort((a, b) => a - b);
8
9    function f(index, t) {
10        ans.push([...t]);
11
12        for (let i = index; i < nums.length; i++) {
13            if (i !== index && nums[i] === nums[i - 1]) continue;
14            t.push(nums[i]);
15            f(i + 1, t);
16            t.pop();
17        }
18    }
19
20    f(0, []);
21    return ans;
22};