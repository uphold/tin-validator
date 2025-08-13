
/**
 * Module dependencies.
 */

const { isValid, mask, sanitize } = require('../../src');

/**
 * Constants.
 */

const ein = '66-0000000';
const itin = '969-88-9999';
const ssn = '001-23-4567';
const invalidTins = ['123456789', '1234567890', '0123456789', '9012345678', '987654321', '876543210', '111111111', 'foobar'];

/**
 * Test.
 */

describe('tin-validator', () => {
  describe('isValid()', () => {
    it('should return `false` is `tin` is invalid', () => {
      invalidTins.forEach(number => expect(isValid(number)).toBe(false));
    });

    it('should return `true` is `tin` is a valid `ein`', () => {
      expect(isValid(ein)).toBe(true);
    });

    it('should return `true` is `tin` is a valid `itin`', () => {
      expect(isValid(itin)).toBe(true);
    });

    it('should return `true` is `tin` is a valid `ssn`', () => {
      expect(isValid(ssn)).toBe(true);
    });
  });

  describe('mask()', () => {
    it('should throw an error if `tin` is invalid', () => {
      try {
        mask('foobar');

        expect.fail();
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('Invalid Taxpayer Identification Number');
      }
    });

    it('should return a masked `ein`', () => {
      expect(mask(ein)).toBe('XX-XXX0000');
    });

    it('should return a masked `itin`', () => {
      expect(mask(itin)).toBe('XXX-XX-9999');
    });

    it('should return a masked `ssn`', () => {
      expect(mask(ssn)).toBe('XXX-XX-4567');
    });
  });

  describe('sanitize()', () => {
    it('should remove all no numeric characters', () => {
      expect(sanitize('az0Z1<2*3#4---5  6%7&8/9?')).toBe('0123456789');
    });
  });
});
