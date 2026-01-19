1const calculateNumOfJumps = (num, chars, currCharIdx) => {
2  num = String(num);
3  // console.log(num);
4  // console.log(num);
5  for (let i = 0; i < num.length; i++) {
6    chars[currCharIdx + 1 + i] = num[i];
7  }
8
9  return num.length;
10};
11
12/**
13 * @param {character[]} chars
14 * @return {number}
15 */
16var compress = function (chars) {
17  let i = 0;
18  let j = 1;
19
20  while (j < chars.length) {
21    if (chars[i] === chars[j]) {
22      if (typeof chars[i + 1] === "number") {
23        chars[i + 1]++;
24      } else {
25        chars[i + 1] = 2;
26      }
27      j++;
28    } else {
29      if (typeof chars[i + 1] === "number") {
30        i = i + calculateNumOfJumps(chars[i + 1], chars, i) + 1;
31      } else {
32        i++;
33      }
34      chars[i] = chars[j++];
35    }
36  }
37
38  if (typeof chars[i + 1] === "number") {
39    i = i + calculateNumOfJumps(chars[i + 1], chars, i) + 1;
40  } else {
41    i++;
42  }
43
44  // console.log(chars, i);
45
46  chars.splice(i, Infinity);
47};