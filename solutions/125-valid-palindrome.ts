const isPalindrome = (s: string): boolean => {
  const regex = /[^a-z0-9]/g;
  const str = s.toLowerCase().replace(regex, '');

  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
};

const s1 = 'A man, a plan, a canal: Panama';
const s2 = 'race a car';
const s3 = '';
