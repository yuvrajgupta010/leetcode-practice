/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
      const n = s.length;
  const map = new Map();
  const isTMapped = new Set();

  for (let i = 0; i < n; i++) {
    if (!map.has(s[i])) {
      if (isTMapped.has(t[i])) return false;
      map.set(s[i], t[i]);
      isTMapped.add(t[i]);
    } else {
      if (map.get(s[i]) !== t[i]) return false;
    }
  }

  return true;
};