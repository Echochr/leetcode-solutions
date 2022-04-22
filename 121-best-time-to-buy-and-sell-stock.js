/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    // declare left & right pointer
    let left = 0
    let right = 1;
    // declare max profit
    let maxP = 0;

    // iterate through the array, right pointer moves from index1 to the end
    while(right < prices.length) {
        // check if it is profitable
        if (prices[left] < prices[right]) {
            // reassign maxP to the larger value
            maxP = Math.max(maxP, prices[right] - prices[left]);
        } else {
            // otherwise move left pointer directly to the right pointer
            left = right;
        }
        right++;
    }
    return maxP;
}
export default maxProfit;