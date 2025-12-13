1/**
2 * @param {string} s1
3 * @param {string} s2
4 * @return {boolean}
5 */
6var checkInclusion = function(s1, s2) {
7 if (s1.length > s2.length) {
8        return false;
9    }
10    
11    let s1Count = {};
12    let s2Count = {};
13    
14    for (let i = 0; i < s1.length; i++) {
15        s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1;
16        s2Count[s2[i]] = (s2Count[s2[i]] || 0) + 1;
17    }
18    
19    if (isEqual(s1Count, s2Count)) {
20        return true;
21    }
22    
23    let left = 0;
24    for (let right = s1.length; right < s2.length; right++) {
25        s2Count[s2[right]] = (s2Count[s2[right]] || 0) + 1;
26        s2Count[s2[left]]--;
27        
28        if (s2Count[s2[left]] === 0) {
29            delete s2Count[s2[left]];
30        }
31        
32        left++;
33        
34        if (isEqual(s1Count, s2Count)) {
35            return true;
36        }
37    }
38    
39    return false;    
40};
41
42function isEqual(obj1, obj2) {
43    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
44        return false;
45    }
46    for (let key in obj1) {
47        if (obj1[key] !== obj2[key]) {
48            return false;
49        }
50    }
51    return true;
52}