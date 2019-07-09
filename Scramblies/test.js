const scramblies = require('.');

describe('Scramblies', () => {
  describe('False', () => {
    it('Should return false if str2 is not in str1', () => {
      expect(scramblies('hi', 'a')).toBe(false);
    });
    it('Should return false if str2 is not in str1', () => {
      expect(scramblies('katas', 'steak')).toBe(false);
    });
  });
  describe('True', () => {
    it('Should return true if str2 is in str1', () => {
      expect(scramblies('hi', 'i')).toBe(true);
    });
    it('Should return true if str2 is in str1', () => {
      expect(scramblies('rkqodlw', 'world')).toBe(true);
    });
    it('Should return true if str2 is in str1', () => {
      expect(scramblies('cedewaraaossoqqyt', 'codewars')).toBe(true);
    });
  });
});
