
/**
 * Module dependencies.
 */

import * as einValidator from 'ein-validator';
import * as itinValidator from 'itin-validator';
import * as ssnValidator from 'ssn-validator';
import * as tinValidator from '../src';
import should from 'should';
import sinon from 'sinon';

/**
 * Test sandbox.
 */

const sandbox = sinon.sandbox.create();

/**
 * Supported validators.
 */

const validators = {
  ein: einValidator,
  itin: itinValidator,
  ssn: ssnValidator
};

/**
 * Test.
 */

describe('TinValidator', () => {
  afterEach('sinon-hook', () => {
    sandbox.restore();
  });

  describe('isValid()', () => {
    it('should return false is value is invalid', () => {
      tinValidator.isValid('foobar').should.be.false();
    });

    Object.keys(validators).forEach((type) => {
      it(`should check if value is a valid ${type} using the given value and options`, () => {
        const args = ['foobar', { foo: 'bar' }];

        sandbox.stub(validators[type], 'isValid');

        tinValidator.isValid(...args);

        validators[type].isValid.callCount.should.equal(1);
        validators[type].isValid.firstCall.args.should.eql(args);
      });

      it(`should return true is value is a valid ${type}`, () => {
        sandbox.stub(validators[type], 'isValid').returns(true);

        tinValidator.isValid('foobar').should.be.true();
      });
    });
  });

  describe('mask()', () => {
    it('should return undefined if number is invalid', () => {
      should.not.exist(tinValidator.mask('foobar'));
    });

    Object.keys(validators).forEach((type) => {
      it(`should mask a valid ${type}`, () => {
        sandbox.stub(tinValidator, 'type').returns(type);
        sandbox.stub(validators[type], 'mask').returns('foo');

        tinValidator.mask('bar').should.equal('foo');
      });
    });
  });

  describe('sanitize()', () => {
    it('should return a sanited number', () => {
      tinValidator.sanitize('123a- 12B-3123_!#$%&*?').should.equal('123123123');
    });
  });

  describe('type()', () => {
    it('should return undefined if number is invalid', () => {
      should.not.exist(tinValidator.type('foobar'));
    });

    Object.keys(validators).forEach((type) => {
      it(`should return ${type} if value is a valid ${type}`, () => {
        sandbox.stub(validators[type], 'isValid').returns(true);

        tinValidator.type('foobar').should.equal(type);
      });
    });
  });
});
