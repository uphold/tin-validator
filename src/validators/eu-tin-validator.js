'use strict';

/**
 * Module dependencies.
 */

const { configByMemberState } = require('./validators-by-country');
const AbstractTinValidator = require('./abstract-tin-validator');
const euTinValidatorClient = require('../clients/eu-tin-validator-client');

/**
 * Class `EUTinValidator`.
 */

class EUTinValidator extends AbstractTinValidator {
  /**
   * Constructor.
   */

  constructor() {
    super();

    this.defaultSanitizePattern = /[.\-/\s]/g;
    this.defaultMaskPattern = /[\w]/g;
  }

  /**
   * Get member state config.
   */

  getMemberStateConfig(country, entityType = 'natural-person') {
    const memberStateConfig = configByMemberState[entityType]?.[country] || {};

    if (memberStateConfig.replaceCountry) {
      return {
        config: configByMemberState[entityType][memberStateConfig.replaceCountry] || {},
        memberState: memberStateConfig.renameMemberState || memberStateConfig.replaceCountry
      };
    }

    return { config: memberStateConfig, memberState: memberStateConfig.renameMemberState || country };
  }

  /**
   * Is country supported.
   */

  isCountrySupported(country, entityType = 'natural-person') {
    return !!configByMemberState[entityType]?.[country];
  }

  /**
   * Is valid.
   */

  async isValid(value, { country, entityType, skipExternalValidations = false }) {
    const { config, memberState } = this.getMemberStateConfig(country, entityType);
    const sanitizedValue = this.sanitize(value, config);

    if (config.validateInternally || skipExternalValidations) {
      return this.runInternalValidatation(sanitizedValue, config);
    }

    try {
      const { result: { structureValid, syntaxUnavailable, syntaxValid } = {} } = await euTinValidatorClient.post('/tinRequest', {
        msCode: memberState,
        tinNumber: sanitizedValue
      });

      // We consider the EU API response as valid if these conditions are met:
      // - The structure is valid:
      // - The syntax is either valid or unavailable.
      return !!structureValid && (!!syntaxValid || !!syntaxUnavailable);
    } catch (_) {
      return this.runInternalValidatation(sanitizedValue, config);
    }
  }

  /**
   * Mask.
   */

  async mask(value, options = {}) {
    const upperCaseValue = value.toUpperCase();
    const isValid = await this.isValid(upperCaseValue, options);

    if (!isValid) {
      throw new Error('Invalid Taxpayer Identification Number');
    }

    return upperCaseValue.slice(0, upperCaseValue.length - 4).replace(this.defaultMaskPattern, 'X') + upperCaseValue.slice(-4);
  }

  /**
   * Validate internal.
   */

  runInternalValidatation(value, config) {
    return config.formats.some(format => format.test(value));
  }

  /**
   * Sanitize.
   */

  sanitize(value, { country, entityType, sanitizePattern } = {}) {
    if (country && entityType) {
      const { config } = this.getMemberStateConfig(country, entityType);

      sanitizePattern = config.sanitizePattern || sanitizePattern;
    }

    const pattern = sanitizePattern || this.defaultSanitizePattern;

    return value.toUpperCase().replace(pattern, '');
  }
}

/**
 * Export.
 */

module.exports = new EUTinValidator();
