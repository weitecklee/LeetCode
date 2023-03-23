function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) {
    return -1;
  }
  const nodes: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    nodes.set(i, []);
  }
  for (const [a, b] of connections) {
    nodes.get(a).push(b);
    nodes.get(b).push(a);
  }
  const visited: Set<number> = new Set();
  let groups = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      visited.add(i);
      groups++;
      const queue: number[] = [i];
      for (let j = 0; j < queue.length; j++) {
        for (const conn of nodes.get(queue[j])) {
          if (!visited.has(conn)) {
            visited.add(conn);
            queue.push(conn);
          }
        }
      }
    }
  }
  return groups - 1;
};