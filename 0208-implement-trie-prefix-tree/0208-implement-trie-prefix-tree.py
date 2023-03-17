from collections import defaultdict

class Trie:

    def __init__(self):
      self.dict = defaultdict(lambda: Trie())
      self.isWord = False

    def insert(self, word: str) -> None:
      trie = self
      for c in word:
        trie = trie.dict[c]
      trie.isWord = True

    def search(self, word: str) -> bool:
      trie = self
      for c in word:
        if c not in trie.dict:
          return False
        trie = trie.dict[c]
      return trie.isWord

    def startsWith(self, prefix: str) -> bool:
      trie = self
      for c in prefix:
        if c not in trie.dict:
          return False
        trie = trie.dict[c]
      return True
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)