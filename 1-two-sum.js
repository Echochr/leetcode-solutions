const twoSum = (nums, target) => {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hash.has(diff)) {
      return [hash.get(diff), i];
    }
    hash.set(nums[i], i);
  }
};

const nums = [2, 7, 11, 15];
const target = 18;
twoSum(nums, target);
