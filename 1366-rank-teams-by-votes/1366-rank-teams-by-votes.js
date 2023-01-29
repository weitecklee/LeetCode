/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  const teams = new Map();
  for (const c of votes[0]) {
    teams.set(c, new Array(votes[0].length).fill(0));
  }
  for (const vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      teams.get(vote[i])[i]++;
    }
  }
  const ans = votes[0].split('');
  ans.sort((a, b) => {
    for (let i = 0; i < votes[0].length; i++) {
      if (teams.get(a)[i] > teams.get(b)[i]) {
        return -1;
      }
      if (teams.get(a)[i] < teams.get(b)[i]) {
        return 1;
      }
    }
    if (a < b) {
      return -1;
    }
    return 1;
  })
  return ans.join('');
};