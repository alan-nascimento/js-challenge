const { nonConstructibleChange, sortedSquaredArray } = require('./index');

describe('JS Challenge', () => {
  describe('Non Constructible Change', () => {
    it('should zero when it is called without argument', () => {
      const result = nonConstructibleChange();
      expect(result).toStrictEqual(0);
    });

    it('should throws when the given array has some non-number item', () => {
      try {
        nonConstructibleChange([null, '', undefined, 2]);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty(
          'message',
          'This method accept only array of numbers'
        );
      }
    });

    it('should return a minimum amount of change ', () => {
      const TEST_CASE_ONE = {
        given: [5, 7, 1, 1, 2, 3, 22],
        then: 20,
      };

      const TEST_CASE_TWO = {
        given: [1, 1, 1, 1, 1],
        then: 5,
      };

      const TEST_CASE_THREE = {
        given: [1, 5, 1, 1, 1, 10, 15, 20, 100],
        then: 55,
      };

      expect(nonConstructibleChange(TEST_CASE_ONE.given)).toStrictEqual(
        TEST_CASE_ONE.then
      );
      expect(nonConstructibleChange(TEST_CASE_TWO.given)).toStrictEqual(
        TEST_CASE_TWO.then
      );
      expect(nonConstructibleChange(TEST_CASE_THREE.given)).toStrictEqual(
        TEST_CASE_THREE.then
      );
    });
  });

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
