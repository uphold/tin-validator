
/**
 * Module dependencies.
 */

import should from 'should';
import { isValid, mask, sanitize } from '../src';

/**
 * Sample numbers.
 */

const ein = '66-0000000';
const itin = '969-88-9999';
const ssn = '001-23-4567';
const invalidTin = ['123456789', '1234567890', '0123456789', '9012345678', '987654321', '876543210', '111111111', 'foobar'];

/**
 * Test.
 */

describe('tin-validator', () => {
  describe('isValid()', () => {
    it('should return `false` is `tin` is invalid', () => {
      invalidTin.forEach(number => isValid(number).should.be.false());
    });

    it('should return `true` is `tin` is a valid `ein`', () => {
      isValid(ein).should.be.true();
    });

    it('should return `true` is `tin` is a valid `itin`', () => {
      isValid(itin).should.be.true();
    });

    it('should return `true` is `tin` is a valid `ssn`', () => {
      isValid(ssn).should.be.true();
    });
  });

  describe('mask()', () => {
    it('should throw an error if `tin` is invalid', () => {
      try {
        mask('foobar');

        should.fail();
      } catch (e) {
        e.should.be.instanceOf(Error);
        e.message.should.equal('Invalid Taxpayer Identification Number');
      }
    });

    it('should return a masked `ein`', () => {
      mask(ein).should.equal('XX-XXX0000');
    });

    it('should return a masked `itin`', () => {
      mask(itin).should.equal('XXX-XX-9999');
    });

    it('should return a masked `ssn`', () => {
      mask(ssn).should.equal('XXX-XX-4567');
    });
  });

  describe('sanitize()', () => {
    it('should remove all no numeric characters', () => {
      sanitize('az0Z1<2*3#4---5  6%7&8/9?').should.equal('0123456789');
    });
  });
});
