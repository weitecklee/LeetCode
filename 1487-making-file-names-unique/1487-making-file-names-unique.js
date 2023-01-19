/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
  const uniques = new Set();
  const ans = [];
  for (const name of names) {
    if (uniques.has(name)) {
      let i = 0;
      let name2;
      do {
        i++;
        name2 = name + '(' + i + ')';
      } while (uniques.has(name2));
      uniques.add(name2);
      ans.push(name2);
      
    } else {
      uniques.add(name)
      ans.push(name);
    }
  }
  return ans;
    
};