func shipWithinDays(weights []int, days int) int {
  total := 0
  max := 0
  for _, weight := range weights {
    if weight > max {
      max = weight
    }
    total += weight
  }
  lo := max
  hi := total
  for lo < hi {
    mid := lo + (hi - lo) / 2
    if shippable(weights, mid, days) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }
  return lo
}

func shippable(weights []int, capacity int, days int) bool {
  d := 0
  curr := 0
  for _, weight := range weights {
    curr += weight
    if curr > capacity {
      d++
      curr = weight
    }
  }
  return (d + 1) <= days
}