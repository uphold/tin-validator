'use strict';

/**
 * Module dependencies.
 */

const { isValid, mask, sanitize } = require('../../src');
const euTinValidator = require('../../src/validators/eu-tin-validator');
const usTinValidator = require('../../src/validators/us-tin-validator');

/**
 * Constants.
 */

const invalidTins = ['123456789', '1234567890', '0123456789', '9012345678', '987654321', '876543210', '111111111', 'foobar'];

/**
 * Test.
 */

describe('tin-validator', () => {
  describe('isValid()', () => {
    it('should return `false` for invalid TINs', async () => {
      for (const tin of invalidTins) {
        const result = await isValid(tin);

        expect(result).toBe(false);
      }
    });

    it('should call `usTinValidator.isValid()` if `country` is `US`', async () => {
      vi.spyOn(usTinValidator, 'isValid').mockReturnValue(true);

      const result = await isValid('66-0000000', { country: 'US', entityType: 'natural-person' });

      expect(result).toBe(true);
      expect(usTinValidator.isValid).toHaveBeenCalledTimes(1);
      expect(usTinValidator.isValid).toHaveBeenCalledWith('66-0000000');
    });

    it('should call `euTinValidator.isValid()` if `country` is an EU member', async () => {
      vi.spyOn(euTinValidator, 'isValid').mockReturnValue(true);

      const result = await isValid('66-0000000', { country: 'FR', entityType: 'natural-person' });

      expect(result).toBe(true);
      expect(euTinValidator.isValid).toHaveBeenCalledTimes(1);
      expect(euTinValidator.isValid).toHaveBeenCalledWith('66-0000000', expect.objectContaining({ country: 'FR', entityType: 'natural-person' }));
    });

    it('should pass `skipExternalValidations` flag to `euTinValidator.isValid()`', async () => {
      vi.spyOn(euTinValidator, 'isValid').mockReturnValue(true);

      const result = await isValid('66-0000000', { country: 'FR', entityType: 'natural-person', skipExternalValidations: true });

      expect(result).toBe(true);
      expect(euTinValidator.isValid).toHaveBeenCalledTimes(1);
      expect(euTinValidator.isValid).toHaveBeenCalledWith('66-0000000', { country: 'FR', entityType: 'natural-person', skipExternalValidations: true });
    });

    it('should return `true` for any other country', async () => {
      const result = await isValid('16-182749', { country: 'BO', entityType: 'natural-person' });

      expect(result).toBe(true);
    });
  });

  describe('mask()', () => {
    it('should call `usTinValidator.mask()` if `country` is `US`', async () => {
      vi.spyOn(usTinValidator, 'mask').mockReturnValue(true);

      await mask('66-0000000', { country: 'US', entityType: 'natural-person' });

      expect(usTinValidator.mask).toHaveBeenCalledTimes(1);
      expect(usTinValidator.mask).toHaveBeenCalledWith('66-0000000');
    });

    it('should call `euTinValidator.mask()` if `country` is an EU member', async () => {
      vi.spyOn(euTinValidator, 'mask').mockReturnValue(true);

      await mask('66-0000000', { country: 'FR', entityType: 'natural-person' });

      expect(euTinValidator.mask).toHaveBeenCalledTimes(1);
      expect(euTinValidator.mask).toHaveBeenCalledWith('66-0000000', expect.objectContaining({ country: 'FR', entityType: 'natural-person' }));
    });

    it('should pass `skipExternalValidations` flag to `euTinValidator.mask()`', async () => {
      vi.spyOn(euTinValidator, 'mask').mockReturnValue(true);

      await mask('66-0000000', { country: 'FR', entityType: 'natural-person', skipExternalValidations: true });

      expect(euTinValidator.mask).toHaveBeenCalledTimes(1);
      expect(euTinValidator.mask).toHaveBeenCalledWith('66-0000000', { country: 'FR', entityType: 'natural-person', skipExternalValidations: true });
    });

    it('should return unmasked TIN for any other country', async () => {
      const result = await mask('16-182749', { country: 'BO', entityType: 'natural-person' });

      expect(result).toBe('16-182749');
    });
  });

  describe('sanitize()', () => {
    it('should call `usTinValidator.sanitize()` if `country` is `US`', async () => {
      vi.spyOn(usTinValidator, 'sanitize');

      const value = await sanitize('66-0000000');

      expect(usTinValidator.sanitize).toHaveBeenCalledTimes(1);
      expect(usTinValidator.sanitize).toHaveBeenCalledWith('66-0000000');
      expect(value).toBe('660000000');
    });

    it('should call `euTinValidator.sanitize()` if `country` is an EU member', async () => {
      vi.spyOn(euTinValidator, 'sanitize');

      const value = await sanitize('66-0000/000.', { country: 'FR', entityType: 'natural-person' });

      expect(euTinValidator.sanitize).toHaveBeenCalledTimes(1);
      expect(euTinValidator.sanitize).toHaveBeenCalledWith('66-0000/000.', { country: 'FR', entityType: 'natural-person' });
      expect(value).toBe('660000000');
    });

    it('should return the same value for any other country', async () => {
      const result = await sanitize('16-182749', { country: 'BO', entityType: 'natural-person' });

      expect(result).toBe('16-182749');
    });
  });
});
