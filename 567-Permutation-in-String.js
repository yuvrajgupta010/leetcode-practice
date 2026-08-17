/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (p, s) {
  const n = s.length;
  const m = p.length;
  if (n < m) return false;
  const a = "a".charCodeAt(0);
  const sHash = Array.from({ length: 26 }).fill(0);
  const pHash = Array.from({ length: 26 }).fill(0);

  for (let char of p) {
    pHash[char.charCodeAt(0) - a]++;
  }

  for (let i = 0; i < m; i++) {
    sHash[s[i].charCodeAt(0) - a]++;
  }

  const hasAnagram = () => {
    for (let i = 0; i < pHash.length; i++) {
      if (pHash[i] !== sHash[i]) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i <= n - m; i++) {
    if (hasAnagram()) {
      return true;
    }

    sHash[s[i].charCodeAt(0) - a]--;
    if (i + m < n) {
      sHash[s[i + m].charCodeAt(0) - a]++;
    }
  }

  return false;
};