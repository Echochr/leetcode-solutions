const plusOne = (digits: number[]): number[] => {
  let idx = digits.length - 1;
  
  while (digits[idx] === 9) {
    digits[idx] = 0;
    idx--;
  }

  if (idx === -1) {
    digits.unshift(1);
  }

  digits[idx] += 1;
  return digits;
};

const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
plusOne(digits);
