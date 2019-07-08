const sumOfPairs = require('.');

describe('Sum of pairs', () => {
  it('Should return undefined if no values add up to the answer', () => {
    expect(sumOfPairs([1, 2], 2)).toBe(undefined);
  });
  it('Should return pair of values which add up to the answer', () => {
    expect(sumOfPairs([1, 2], 3)).toEqual([1, 2]);
  });
  it('Should return pair of values which add up to the answer', () => {
    expect(sumOfPairs([1, 2, 3], 5)).toEqual([2, 3]);
  });
  it('Should return pair of values which add up to the answer', () => {
    expect(sumOfPairs([1, 2, 3], 4)).toEqual([1, 3]);
  });
  it('Should return undefined if no values add up to the answer', () => {
    expect(sumOfPairs([1, 2, 3], 10)).toBe(undefined);
  });
  it('Should return the earliest pair of values which add up to the answer', () => {
    expect(sumOfPairs([4, 3, 2, 3, 4], 6)).toEqual([4, 2]);
  });
  it('Should return the earliest pair of values which add up to the answer', () => {
    expect(sumOfPairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7]);
  });
});
