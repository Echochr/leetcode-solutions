const generate = (numRows:number): number[][] => {
  const triangle: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    const newRow = [1];
    let j = 1;
    while (j < i) {
      const value = triangle[i-1][j-1] + triangle[i-1][j];
      newRow.push(value);
      j++;
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
};

generate(5);
