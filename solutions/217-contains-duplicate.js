/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = (nums) => {
    // declare a new Set
    const set = new Set();
    for (const num of nums) {
        // check if value already exists in the set
        if (set.has(num)) return true;
        // if not, add it to the set
        set.add(num);
    }
    // finally return false if all values are unique
    return false;
}