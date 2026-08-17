/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
      const n = s.length;
  const m = p.length;
  if (n < m) return [];
  const a = "a".charCodeAt(0);
  const sHash = Array.from({ length: 26 }).fill(0);
  const pHash = Array.from({ length: 26 }).fill(0);
  const returnArr = [];

  for (let char of p) {
    pHash[char.charCodeAt(0) - a]++;
  }
  const pHashStr = pHash.toString();

  for (let i = 0; i < m; i++) {
    sHash[s[i].charCodeAt(0) - a]++;
  }

  for (let i = 0; i <= n - m; i++) {
    if (pHashStr === sHash.toString()) {
      returnArr.push(i);
    }

    sHash[s[i].charCodeAt(0) - a]--;
    if (i + m < n) {
      sHash[s[i + m].charCodeAt(0) - a]++;
      // console.log(sHash);
    }
  }

  // console.log(returnArr);
  return returnArr;
};