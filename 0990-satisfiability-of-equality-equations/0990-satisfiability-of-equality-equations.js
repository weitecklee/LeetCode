/**
 * @param {string[]} equations
 * @return {boolean}
 */

var equationsPossible = function(equations) {

  var Node = function() {
    this.links = new Set();
    this.color = null;
  };
  
  const letters = new Map();
  const uneqs = [];
  for (const eq of equations) {
    const var1 = eq[0];
    const var2 = eq[3];
    if (!letters.has(var1)) {
      letters.set(var1, new Node());
      letters.get(var1).links.add(letters.get(var1));
    }
    if (!letters.has(var2)) {
      letters.set(var2, new Node());
      letters.get(var2).links.add(letters.get(var2));
    }
    if (eq[1] === "=") {
      letters.get(var1).links.add(letters.get(var2));
      letters.get(var2).links.add(letters.get(var1));
    } else {
      uneqs.push([var1, var2]);
    }
  }
  let color = 1;
  for (const [letter, node] of letters.entries()) {
    if (node.color) {
      continue;
    }
    node.color = color;
    const q = [node];
    while (q.length) {
      const curr = q.pop();
      for (const nd of curr.links) {
        if (!nd.color) {
          q.push(nd);
          nd.color = color;
        }
      }
    }
    color++;
  }
  
  for (const [var1, var2] of uneqs) {
    const nd1 = letters.get(var1);
    const nd2 = letters.get(var2);
    if (nd1.color == nd2.color) {
      return false;
    }
  }
  return true;
};