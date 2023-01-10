/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const map = new Map();
    for (const task of tasks) {
        map.has(task) ? map.set(task, map.get(task) + 1) : map.set(task, 1);
    }
    let rounds = 0;
    for (const [diff, n] of map) {
        if (n < 2) {
            return -1;
        }
        rounds += Math.ceil(n / 3);
    }
    return rounds;
};