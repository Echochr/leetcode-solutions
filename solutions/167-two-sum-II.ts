const twoSum = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      right--
    } else {
      left++
    }
  }

  return [++left, ++right];
};

const arr1 = [2, 7, 11, 15];
const target = 26;
twoSum(arr1, target);
