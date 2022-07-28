/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums: number[]) => {
  let pointer = 0;

  const swap = (i: number, j: number) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(i, pointer);
      pointer++;
    }
  }
};
