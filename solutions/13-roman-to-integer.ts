const map: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]];
    const next = map[s[i + 1]];
    if (curr < next)
      ans -= map[s[i]];
    else
      ans += map[s[i]];
  }

  return ans;
};

const roman = 'MCMXCIV';
romanToInt(roman);
