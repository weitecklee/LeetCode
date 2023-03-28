function mincostTickets(days: number[], costs: number[]): number {
  const dp: number[] = new Array(days[days.length - 1] + 1).fill(0);
  let i = 0;
  for (let j = 1; j < dp.length; j++) {
    if (j === days[i]) {
      dp[j] = Math.min(costs[0] + dp[j - 1], costs[1] + (dp[j - 7] ?? 0), costs[2] + (dp[j - 30] ?? 0));
      i++;
    } else {
      dp[j] = dp[j - 1];
    }
  }
  return dp[days[days.length - 1]];
  
};