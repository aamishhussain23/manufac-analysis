export const mean = (numbers) => {
    const total = numbers.reduce((acc, c) => acc + c, 0);
    return total / numbers.length;
  };
  
  export const median = (numbers) => {
    const sorted = numbers.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
  
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
  
    return sorted[middle];
  };
  
  export const mode = (numbers) => {
    const counts = numbers.reduce(
      (acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
      }),
      {}
    );
  
    let maxCount = 0;
    let modes = [];
  
    Object.keys(counts).forEach((number) => {
      if (counts[number] > maxCount) {
        modes = [Number(number)];
        maxCount = counts[number];
      } else if (counts[number] === maxCount) {
        modes.push(Number(number));
      }
    });
  
    return modes;
  };
  