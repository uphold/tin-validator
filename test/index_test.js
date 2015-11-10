
/**
 * Module dependencies.
 */

import * as isValidEin  from 'is-valid-ein';
import * as isValidItin from 'is-valid-itin';
import * as isValidSsn from 'is-valid-ssn';
import sinon from 'sinon';
import { isValid, mask, type } from '../src';

/**
 * Test.
 */

describe('tin', () => {
  const ein = '666234567';
  const itin = '900700000';
  const ssn = '457555462';

  describe('isValid()', () => {
    it('should return `false` is `tin` is invalid', () => {
      isValid('foobar').should.be.false();
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
      sinon.stub(isValidEin, 'mask').returns('foo');

      mask(ein).should.equal('foo');
    });

    it('should return a masked `itin`', () => {
      sinon.stub(isValidItin, 'mask').returns('foo');

      mask(itin).should.equal('foo');
    });

    it('should return a masked `ssn`', () => {
      sinon.stub(isValidSsn.default, 'maskSSN').returns('foo');

      mask(ssn).should.equal('foo');
    });
  });

  describe('type()', () => {
    it('should return `undefined` is `tin` is invalid', () => {
      (undefined === type('foobar')).should.be.true();
    });

    it('should return `true` is `tin` is a valid `ein`', () => {
      type(ein).should.equal('ein')
    });

    it('should return `true` is `tin` is a valid `itin`', () => {
      type(itin).should.equal('itin')
    });

    it('should return `true` is `tin` is a valid `ssn`', () => {
      type(ssn).should.equal('ssn')
    });
  });
});
