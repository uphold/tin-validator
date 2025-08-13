'use strict';

/**
 * Class `AbstractTinValidator`.
 */

class AbstractTinValidator {
  /**
   * Is country supported.
   */

  isCountrySupported() {
    throw new Error('Method not implemented');
  }

  /**
   * Is Valid.
   */

  isValid() {
    throw new Error('Method not implemented');
  }

  /**
   * Mask.
   */

  mask() {
    throw new Error('Method not implemented');
  }

  /**
   * Sanitize.
   */

  sanitize() {
    throw new Error('Method not implemented');
  }
}

/**
 * Export.
 */

module.exports = AbstractTinValidator;
