/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // declare a new Map
  const hash = new Map();
  // iterate through the array once
  for (let i = 0; i < nums.length; i++) {
    // check if the Map has the diff key-value pair that could add up to the target
    const diff = target - nums[i];
    if (hash.has(diff)) {
      // return the two indices of the values that add up to the target
      return [hash.get(diff), i];
    }
    // otherwise add a new key-value pair to the map { value : index }
    hash.set(nums[i], i);
  }
};

const nums = [2, 7, 11, 15];
const target = 18;
twoSum(nums, target);
