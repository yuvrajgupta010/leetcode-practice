1/**
2 * @param {number[]} candidates
3 * @param {number} target
4 * @return {number[][]}
5 */
6var combinationSum = function(candidates, target) {
7    const result = [];
8
9    function backtrack(idx, current, total) {
10        if (total === target) {
11            result.push([...current]);
12            return;
13        }
14        if (idx >= candidates.length || total > target) return;
15
16        // Take
17        current.push(candidates[idx]);
18        backtrack(idx, current, total + candidates[idx]);
19        current.pop();
20
21        // Not take
22        backtrack(idx + 1, current, total);
23    }
24
25    backtrack(0, [], 0);
26    return result;
27};