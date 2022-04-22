import { isAnagram1, isAnagram2 } from '../solutions/242-valid-anagram';

describe('isAnagram', () => {
    it('should return true', () => {
        const s = 'anagram';
        const t = 'nagaram';
        const result1 = isAnagram1(s, t);
        const result2 = isAnagram2(s, t);
        expect(result1).toBe(true);
        expect(result2).toBe(true);
    });

    it('should return false', () => {
        const s = 'rat';
        const t = 'car';
        const result1 = isAnagram1(s, t);
        const result2 = isAnagram2(s, t);
        expect(result1).toBe(false);
        expect(result2).toBe(false);
    });
});