func partitionString(s string) int {
  n := 1
  letters := map[rune]int{}
  for _, c := range s {
    if letters[c] > 0 {
      n++;
      letters = map[rune]int{}
    }
    letters[c]++
  }
  return n
}