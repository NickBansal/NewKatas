module.exports = (array, answer) => {
  const result = [];
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] + array[j] === answer) {
        result.push({
          sumArray: [array[i], array[j]],
          index: j,
        });
      }
    }
  }
  const firstArray = result.sort((a, b) => a.index - b.index);
  return !result.length ? undefined : firstArray[0].sumArray;
};
