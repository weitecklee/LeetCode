/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  const ans = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
    i++;
  }
  if (i >= intervals.length || intervals[i][0] > newInterval[1]) {
    ans.push(newInterval);
  } else {
    const start = Math.min(newInterval[0], intervals[i][0]);
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      i++;
    }
    const finish = Math.max(newInterval[1], intervals[i - 1][1]);
    ans.push([start, finish]);
  }
  while (i < intervals.length) {
    ans.push(intervals[i]);
    i++;
  }
  return ans;
};