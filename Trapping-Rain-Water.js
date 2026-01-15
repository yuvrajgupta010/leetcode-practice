1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var trap = function (height) {
6let left = 0;
7    let right = height.length - 1;
8    let leftMax = height[left];
9    let rightMax = height[right];
10    let water = 0;
11
12    while (left < right) {
13        if (leftMax < rightMax) {
14            left++;
15            leftMax = Math.max(leftMax, height[left]);
16            water += leftMax - height[left];
17        } else {
18            right--;
19            rightMax = Math.max(rightMax, height[right]);
20            water += rightMax - height[right];
21        }
22    }
23
24    return water; 
25    
26};
27