/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */

var Node = () => {
  this.edges = new Set();
};

var smallestEquivalentString = function(s1, s2, baseStr) {
  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (!map.has(s1[i])) {
      map.set(s1[i], new Set());
    }
    if (!map.has(s2[i])) {
      map.set(s2[i], new Set());
    }
    map.get(s1[i]).add(s2[i]);
    map.get(s2[i]).add(s1[i]);
  }
  const visited = new Set();
  const equivs = new Map();
  for (const [ltr, set] of map) {
    if (!visited.has(ltr)) {
      const family = [ltr];
      const q = Array.from(map.get(ltr));
      visited.add(ltr);
      for (let i = 0; i < q.length; i++) {
        if (!visited.has(q[i])) {
          visited.add(q[i]);
          family.push(q[i]);
          map.get(q[i]).forEach((a) => q.push(a));
        }
      }
      family.sort();
      for (const l of family) {
        equivs.set(l, family[0]);
      }
    }
  }
  let ans = '';
  for (const c of baseStr) {
    if (equivs.has(c)) {
      ans += equivs.get(c);
    } else {
      ans += c;
    }
  }
  return ans;
};