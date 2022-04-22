import maxProfit from '../121-best-time-to-buy-and-sell-stock.js';

describe('maxProfit', () => {
    it('returns the maximum profit', () => {
        const result = maxProfit([7,1,5,3,6,4]);
        expect(result).toBe(5);
    });

    it('returns 0 when no transactions are done', () => {
        const result = maxProfit([7,6,4,3,1]);
        expect(result).toBe(0);
    });
});