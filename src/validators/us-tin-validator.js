'use strict';

/**
 * Module dependencies.
 */

const { isValid: isValidEin, mask: maskEin } = require('ein-validator');
const { isValid: isValidItin, mask: maskItin } = require('itin-validator');
const { isValid: isValidSsn, mask: maskSsn } = require('ssn-validator');
const AbstractTinValidator = require('./abstract-tin-validator');

/**
 * Class `USTinValidator`.
 */

class USTinValidator extends AbstractTinValidator {
  /**
   * Is country supported.
   */

  isCountrySupported(country) {
    return country === 'US';
  }

  /**
   * Is valid.
   */

  isValid(value) {
    return isValidSsn(value) || isValidItin(value) || isValidEin(value);
  }

  /**
   * Mask.
   */

  mask(value) {
    const isValid = this.isValid(value);

    if (!isValid) {
      throw new Error('Invalid Taxpayer Identification Number');
    }

    if (isValidEin(value)) {
      return maskEin(value);
    }

    if (isValidItin(value)) {
      return maskItin(value);
    }

    if (isValidSsn(value)) {
      return maskSsn(value);
    }
  }

  /**
   * Sanitize.
   */

  sanitize(value) {
    return String(value).replace(/\D+/g, '');
  }
}

/**
 * Exports.
 */

module.exports = new USTinValidator();
