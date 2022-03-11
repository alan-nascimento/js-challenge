const { sortedSquaredArray } = require('./index');

describe('JS Challenge', () => {
  describe('Sorted Squared Array', () => {
    it('should return an empty array when it is called without argument', () => {
      const result = sortedSquaredArray();
      expect(result).toStrictEqual([]);
    });

    it('should throws when the given array has some non-number item', () => {
      try {
        sortedSquaredArray([1, 2, { a: null }]);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty(
          'message',
          'This method accept only array of numbers'
        );
      }
    });

    it('should return a sorted squared array', () => {
      const TEST_CASE_ONE = {
        given: [1, 2, 3, 5, 6, 8, 9],
        then: [1, 4, 9, 25, 36, 64, 81],
      };

      const TEST_CASE_TWO = {
        given: [-2, -1],
        then: [1, 4],
      };

      const TEST_CASE_THREE = {
        given: [-10, -5, 0, 5, 10],
        then: [0, 25, 25, 100, 100],
      };

      expect(sortedSquaredArray(TEST_CASE_ONE.given)).toStrictEqual(
        TEST_CASE_ONE.then
      );
      expect(sortedSquaredArray(TEST_CASE_TWO.given)).toStrictEqual(
        TEST_CASE_TWO.then
      );
      expect(sortedSquaredArray(TEST_CASE_THREE.given)).toStrictEqual(
        TEST_CASE_THREE.then
      );
    });
  });
});
