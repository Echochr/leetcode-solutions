function majorityElement(nums: number[]): number {
  const hash = {}
  let key = 0
  let majority = 0

  for (const n of nums) {
      hash[n] = (hash[n] || 0) + 1

      if (hash[n] > majority) {
          key = n
          majority = hash[n]
      }
  }

  return key
};