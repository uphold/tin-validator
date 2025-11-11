'use strict';

/**
 * Module dependencies.
 */

const { configByMemberState } = require('../../../src/validators/validators-by-country');
const { legalEntityTins, naturalPersonTins } = require('./test-cases-by-country');
const euTinValidator = require('../../../src/validators/eu-tin-validator');
const euTinValidatorClient = require('../../../src/clients/eu-tin-validator-client');

/**
 * Test `EUTinValidator`.
 */

describe('EUTinValidator', () => {
  describe('getMemberStateConfig()', () => {
    it('should rename member state to match with the API config', () => {
      ['natural-person', 'legal-entity'].forEach(entityType => {
        expect(euTinValidator.getMemberStateConfig('GR', entityType)).toEqual({
          config: configByMemberState[entityType].GR,
          memberState: 'EL'
        });
      });
    });

    describe('legal entity', () => {
      const entityType = 'legal-entity';

      it('should return `replaceCountry` config if it is configured', () => {
        expect(euTinValidator.getMemberStateConfig('GI', entityType)).toEqual({
          config: configByMemberState[entityType].GB,
          memberState: 'GB'
        });
      });

      it('should return `config` as empty object if not defined`', () => {
        expect(euTinValidator.getMemberStateConfig('BO', entityType)).toEqual({
          config: {},
          memberState: 'BO'
        });
      });

      it('should return member state config`', () => {
        expect(euTinValidator.getMemberStateConfig('NO', entityType)).toEqual({
          config: configByMemberState[entityType].NO,
          memberState: 'NO'
        });
      });
    });

    describe('natural person', () => {
      const entityType = 'natural-person';

      it('should return `replaceCountry` config if it is configured', () => {
        expect(euTinValidator.getMemberStateConfig('GI', entityType)).toEqual({
          config: configByMemberState[entityType].GB,
          memberState: 'GB'
        });
      });

      it('should return `config` as empty object if not defined`', () => {
        expect(euTinValidator.getMemberStateConfig('BO', entityType)).toEqual({
          config: {},
          memberState: 'BO'
        });
      });

      it('should return member state config`', () => {
        expect(euTinValidator.getMemberStateConfig('NO', entityType)).toEqual({
          config: configByMemberState[entityType].NO,
          memberState: 'NO'
        });
      });
    });
  });

  describe('isCountrySupported()', () => {
    describe('legal entity', () => {
      const entityType = 'legal-entity';

      it('should return `false` if country is a non EU country', () => {
        expect(euTinValidator.isCountrySupported('US', entityType)).toBe(false);
      });

      it('should return `true` if country is a EU country', () => {
        expect(euTinValidator.isCountrySupported('FR', entityType)).toBe(true);
      });
    });

    describe('natural person', () => {
      const entityType = 'natural-person';

      it('should return `false` if country is a non EU country', () => {
        expect(euTinValidator.isCountrySupported('US', entityType)).toBe(false);
      });

      it('should return `true` if country is a EU country', () => {
        expect(euTinValidator.isCountrySupported('FR', entityType)).toBe(true);
      });
    });
  });

  describe('isValid()', () => {
    it('should call `runInternalValidatation()` if member state `config.validateInternally` is `true`', async () => {
      const { config } = euTinValidator.getMemberStateConfig('IS', 'natural-person');

      vi.spyOn(euTinValidator, 'runInternalValidatation').mockReturnValue(false);
      vi.spyOn(euTinValidatorClient, 'post');

      const result = await euTinValidator.isValid('101010', { country: 'IS', entityType: 'natural-person' });

      expect(euTinValidator.runInternalValidatation).toHaveBeenCalledTimes(1);
      expect(euTinValidator.runInternalValidatation).toHaveBeenCalledWith('101010', config);
      expect(euTinValidatorClient.post).not.toHaveBeenCalled();
      expect(result).toBe(false);
    });

    it('should call `euTinValidatorClient.post()` and return `true` if both structure and syntax are valid', async () => {
      vi.spyOn(euTinValidator, 'runInternalValidatation');
      vi.spyOn(euTinValidatorClient, 'post').mockResolvedValue({ result: { structureValid: true, syntaxUnavailable: false, syntaxValid: true } });

      const result = await euTinValidator.isValid('101-010', { country: 'FR', entityType: 'natural-person' });

      expect(euTinValidator.runInternalValidatation).not.toHaveBeenCalled();
      expect(euTinValidatorClient.post).toHaveBeenCalledTimes(1);
      expect(euTinValidatorClient.post).toHaveBeenCalledWith('/tinRequest', {
        msCode: 'FR',
        tinNumber: '101010'
      });
      expect(result).toBe(true);
    });

    it('should call `euTinValidatorClient.post()` and return `true` if structure is valid but syntax is unavailable', async () => {
      vi.spyOn(euTinValidator, 'runInternalValidatation');
      vi.spyOn(euTinValidatorClient, 'post').mockResolvedValue({ result: { structureValid: true, syntaxUnavailable: true, syntaxValid: false } });

      const result = await euTinValidator.isValid('101-010', { country: 'FR', entityType: 'natural-person' });

      expect(euTinValidator.runInternalValidatation).not.toHaveBeenCalled();
      expect(euTinValidatorClient.post).toHaveBeenCalledTimes(1);
      expect(euTinValidatorClient.post).toHaveBeenCalledWith('/tinRequest', {
        msCode: 'FR',
        tinNumber: '101010'
      });
      expect(result).toBe(true);
    });

    it('should call `euTinValidatorClient.post()` and return `false` if structure is invalid', async () => {
      vi.spyOn(euTinValidator, 'runInternalValidatation');
      vi.spyOn(euTinValidatorClient, 'post').mockResolvedValue({ result: { structureValid: false, syntaxUnavailable: true, syntaxValid: false } });

      const result = await euTinValidator.isValid('101-010', { country: 'FR', entityType: 'natural-person' });

      expect(euTinValidator.runInternalValidatation).not.toHaveBeenCalled();
      expect(euTinValidatorClient.post).toHaveBeenCalledTimes(1);
      expect(euTinValidatorClient.post).toHaveBeenCalledWith('/tinRequest', {
        msCode: 'FR',
        tinNumber: '101010'
      });
      expect(result).toBe(false);
    });

    it('should call `runInternalValidatation()` if `euTinValidatorClient.post()` throws an error', async () => {
      const { config } = euTinValidator.getMemberStateConfig('FR', 'natural-person');

      vi.spyOn(euTinValidator, 'runInternalValidatation').mockReturnValue(true);
      vi.spyOn(euTinValidatorClient, 'post').mockRejectedValue(new Error('Network error'));

      const result = await euTinValidator.isValid('101-010', { country: 'FR', entityType: 'natural-person' });

      expect(euTinValidatorClient.post).toHaveBeenCalledTimes(1);
      expect(euTinValidatorClient.post).toHaveBeenCalledWith('/tinRequest', {
        msCode: 'FR',
        tinNumber: '101010'
      });
      expect(euTinValidator.runInternalValidatation).toHaveBeenCalledTimes(1);
      expect(euTinValidator.runInternalValidatation).toHaveBeenCalledWith('101010', config);
      expect(result).toBe(true);
    });
  });

  describe('mask()', () => {
    it('should throw an error if `tin` is invalid', async () => {
      vi.spyOn(euTinValidator, 'isValid').mockRejectedValue(new Error('Invalid Taxpayer Identification Number'));

      try {
        await euTinValidator.mask('foobar', { country: 'FR', entityType: 'natural-person' });

        expect.fail();
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('Invalid Taxpayer Identification Number');
      }
    });

    it('should uppercase value', async () => {
      vi.spyOn(euTinValidator, 'isValid').mockResolvedValue(true);

      const maskedValue = await euTinValidator.mask('1234567ab', { country: 'IE', entityType: 'legal-entity' });


      expect(maskedValue).toBe('XXXXX67AB');
    });

    describe('legal entity', () => {
      const entityType = 'legal-entity';

      test.each(legalEntityTins)('should return masked value for $country TIN', async ({ country, tin }) => {
        vi.spyOn(euTinValidator, 'isValid').mockResolvedValue(true);

        for (const index in tin.valid) {
          const maskedTin = await euTinValidator.mask(tin.valid[index], { country, entityType });

          expect(maskedTin).toBe(tin.masked[index]);
        }
      });
    });

    describe('natural person', () => {
      const entityType = 'natural-person';

      beforeEach(() => {
        vi.spyOn(euTinValidatorClient, 'post').mockRejectedValue(new Error('Network error'));
      });

      test.each(naturalPersonTins)('should return masked value for $country TIN', async ({ country, tin }) => {
        for (const index in tin.valid) {
          const maskedTin = await euTinValidator.mask(tin.valid[index], { country, entityType });

          expect(maskedTin).toBe(tin.masked[index]);
        }
      });
    });
  });

  describe('runInternalValidatation()', () => {
    describe('legal entity', () => {
      const entityType = 'legal-entity';

      legalEntityTins.forEach(({ country, tin }) => {
        it(`should return 'true' for valid '${country}' TIN`, () => {
          tin.valid.forEach(validTin => {
            const { config } = euTinValidator.getMemberStateConfig(country, entityType);
            const sanitizedValue = euTinValidator.sanitize(validTin, config);

            expect(euTinValidator.runInternalValidatation(sanitizedValue, config)).toBe(true);
          });
        });

        it(`should return 'false' for invalid '${country}' TIN`, () => {
          tin.invalid.forEach(invalidTin => {
            const { config } = euTinValidator.getMemberStateConfig(country, entityType);
            const sanitizedValue = euTinValidator.sanitize(invalidTin, config);

            expect(euTinValidator.runInternalValidatation(sanitizedValue, config)).toBe(false);
          });
        });
      });
    });

    describe('natural person', () => {
      const entityType = 'natural-person';

      naturalPersonTins.forEach(({ country, tin }) => {
        it(`should return 'true' for valid '${country}' TIN`, () => {
          tin.valid.forEach(validTin => {
            const { config } = euTinValidator.getMemberStateConfig(country, entityType);
            const sanitizedValue = euTinValidator.sanitize(validTin, config);

            expect(euTinValidator.runInternalValidatation(sanitizedValue, config)).toBe(true);
          });
        });

        it(`should return 'false' for invalid '${country}' TIN`, () => {
          tin.invalid.forEach(invalidTin => {
            const { config } = euTinValidator.getMemberStateConfig(country, entityType);
            const sanitizedValue = euTinValidator.sanitize(invalidTin, config);

            expect(euTinValidator.runInternalValidatation(sanitizedValue, config)).toBe(false);
          });
        });
      });
    });
  });

  describe('sanitize()', () => {
    it('should call `getMemberStateConfig()` if country and entityType are provided', () => {
      expect(euTinValidator.sanitize('  1234  /-  abc ', { country: 'FR', entityType: 'natural-person' })).toBe('1234ABC');
    });

    it('should remove unnecessary characters and to lower case', () => {
      expect(euTinValidator.sanitize('  1234  /-  abc ')).toBe('1234ABC');
    });

    it('should use custom sanitization pattern', () => {
      expect(euTinValidator.sanitize('1234-abc', { sanitizePattern: /[\d-]/g })).toBe('ABC');
    });
  });
});
