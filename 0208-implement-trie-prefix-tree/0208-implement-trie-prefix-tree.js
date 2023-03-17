
var Trie = function() {
  this.map = new Map();
  this.isWord = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let trie = this;
  for (const c of word) {
    if (!trie.map.has(c)) {
      trie.map.set(c, new Trie());
    }
    trie = trie.map.get(c);
  }
  trie.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let trie = this;
  for (const c of word) {
    if (!trie.map.has(c)) {
      return false;
    }
    trie = trie.map.get(c);
  }
  return trie.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let trie = this;
  for (const c of prefix) {
    if (!trie.map.has(c)) {
      return false;
    }
    trie = trie.map.get(c);
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */