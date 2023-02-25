/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
    return false;
  }
  const pairs = new Map();
  for (const [word1, word2] of similarPairs) {
    if (!pairs.has(word1)) {
      pairs.set(word1, new Set());
    }
    if (!pairs.has(word2)) {
      pairs.set(word2, new Set());
    }
    pairs.get(word1).add(word2);
    pairs.get(word2).add(word1);
  }
  for (let i = 0; i < sentence1.length; i++) {
    if (sentence1[i] === sentence2[i]) {
      continue;
    }
    if (!pairs.has(sentence1[i]) || !pairs.has(sentence2[i]) || !pairs.get(sentence1[i]).has(sentence2[i])) {
      return false;
    }
  }
  return true;
};