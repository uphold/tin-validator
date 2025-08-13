'use strict';

/**
 * Module dependencies.
 */

const usTinValidator = require('../../../src/validators/us-tin-validator');

/**
 * Constants.
 */

const ein = '66-0000000';
const itin = '969-88-9999';
const ssn = '001-23-4567';

/**
 * Test `USTinValidator`.
 */

describe('USTinValidator', () => {
  describe('isCountrySupported()', () => {
    it('should return `false` if country is not `US`', () => {
      expect(usTinValidator.isCountrySupported('BO')).toBe(false);
    });

    it('should return `true` if country is `US`', () => {
      expect(usTinValidator.isCountrySupported('US')).toBe(true);
    });
  });

  describe('isValid()', () => {
    it('should return `false` is `tin` is invalid', () => {
      expect(usTinValidator.isValid('invalid-tin')).toBe(false);
    });

    it('should return `true` is `tin` is a valid `ein`', () => {
      expect(usTinValidator.isValid(ein)).toBe(true);
    });

    it('should return `true` is `tin` is a valid `itin`', () => {
      expect(usTinValidator.isValid(itin)).toBe(true);
    });

    it('should return `true` is `tin` is a valid `ssn`', () => {
      expect(usTinValidator.isValid(ssn)).toBe(true);
    });
  });

  describe('mask()', () => {
    it('should throw an error if `tin` is invalid', () => {
      try {
        usTinValidator.mask('foobar');

        expect.fail();
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('Invalid Taxpayer Identification Number');
      }
    });

    it('should return a masked `ein`', () => {
      expect(usTinValidator.mask(ein)).toBe('XX-XXX0000');
    });

    it('should return a masked `itin`', () => {
      expect(usTinValidator.mask(itin)).toBe('XXX-XX-9999');
    });

    it('should return a masked `ssn`', () => {
      expect(usTinValidator.mask(ssn)).toBe('XXX-XX-4567');
    });
  });

  describe('sanitize()', () => {
    it('should remove unnecessary characters and letters', () => {
      expect(usTinValidator.sanitize('  1234  /-  ABC ')).toBe('1234');
    });
  });
});
