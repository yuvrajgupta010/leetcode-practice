/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

  for (let str of strs) {
    const sortedStr = [...str].sort().join("");
    if (sortedStr in map) {
      map[sortedStr].push(str);
    } else {
      map[sortedStr] = [str];
    }
  }

  const returnArr = [];
  for (let key in map) {
    returnArr.push(map[key]);
  }

  return returnArr;
};