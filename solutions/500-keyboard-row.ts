const findWords = (words: string[]): string[] => {
  const row1 = new Set('qwertyuiop');
  const row2 = new Set('asdfghjkl');
  const row3 = new Set('zxcvbnm');

  const result: string[] = [];
  for (let word of words) {
    const lowercaseWord = word.toLowerCase();
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for (const letter of lowercaseWord) {
      if (row1.has(letter))
        count1++
      if (row2.has(letter))
        count2++
      if (row3.has(letter))
        count3++
    }

    const N = word.length;
    const matchRow1 = count1 === N;
    const matchRow2 = count2 === N;
    const matchRow3 = count3 === N;
    if (matchRow1 || matchRow2 || matchRow3)
      result.push(word);
  }

  return result;
};

const arr1 = ['Hello', 'Alaska', 'Dad', 'Peace'];
findWords(arr1);
