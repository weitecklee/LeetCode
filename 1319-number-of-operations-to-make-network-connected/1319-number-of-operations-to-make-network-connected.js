/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

function Node() {
  this.links = [];
}

var makeConnected = function(n, connections) {
  if (connections.length < n - 1) {
    return -1
  }
  const nodes = new Map();
  for (let i = 0; i < n; i++) {
    nodes.set(i, new Node());
  }
  for (const [a, b] of connections) {
    nodes.get(a).links.push(b);
    nodes.get(b).links.push(a);
  }
  const visited = new Set();
  let groups = 0;
  
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) {
      continue;
    }
    visited.add(i);
    groups++;
    const queue = [i];
    for (let j = 0; j < queue.length; j++) {
      for (const link of nodes.get(queue[j]).links) {
        if (!visited.has(link)) {
          visited.add(link);
          queue.push(link);
        }
      }
    }

  }

  return groups - 1;
};