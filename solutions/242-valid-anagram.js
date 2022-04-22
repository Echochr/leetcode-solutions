/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution 1
// split and sort two strings for vague equality check
export const isAnagram1 = (s,t) => {
    const s2 = s.split('').sort().toString();
    const t2 = t.split('').sort().toString();
    return s2 == t2;
}

// Solution 2
// create a proper hash to compare two strings
export const isAnagram2 = (s, t) => {
    if (s.length !== t.length) return false;

    const sMap = {};
    for (const letter of s) {
        sMap[letter]
        ? sMap[letter]++
        : sMap[letter] = 1;
    }
    for (const letter of t) {
        if (!sMap[letter] || sMap[letter] < 1) return false;
        sMap[letter]--;
    }
    return true;
}
