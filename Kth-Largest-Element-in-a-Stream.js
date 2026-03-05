1class KthLargest {
2    constructor(k, nums) {
3        this.k = k;
4        this.arr = nums.sort((a, b) => a - b);
5    }
6    add(val) {
7        const insert = () => {
8            let l = 0, r = this.arr.length - 1;
9            while(l <= r) {
10                const mid = Math.floor((l + r) / 2);
11                if(this.arr[mid] === val) return mid;
12                if(this.arr[mid] < val) {
13                    l = mid + 1;
14                } else {
15                    r = mid - 1;
16                }
17            }
18            return l;
19        }
20        this.arr.splice(insert(), 0, val);
21        return this.arr[this.arr.length - this.k];
22    }
23}