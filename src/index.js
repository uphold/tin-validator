
/**
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 *
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 */

/**
 * Module dependencies
 */

import { isValid as isValidEin, mask as maskEin } from 'ein-validator';
import { isValid as isValidItin, mask as maskItin } from 'itin-validator';
import { isValid as isValidSsn, mask as maskSsn } from 'ssn-validator';

/**
 * Export isValid function.
 */

export function isValid(tin, options) {
  return isValidEin(tin, options) || isValidItin(tin, options) || isValidSsn(tin, options);
}

/**
 * Export mask funtion.
 */

export function mask(tin, options) {
  const type = this.type(tin, options);

  if (type === 'ein') {
    return maskEin(tin, options);
  }

  if (type === 'itin') {
    return maskItin(tin, options);
  }

  if (type === 'ssn') {
    return maskSsn(tin, options);
  }
}

/**
 * Sanitize tin.
 */

export function sanitize(tin) {
  return String(tin).replace(/[^0-9]+/g, '');
}

/**
 * Export type function.
 *
 * This is a best effort guess. There are numbers which are compliant with multiple tin validators.
 */

export function type(tin, options) {
  if (isValidSsn(tin, options)) {
    return 'ssn';
  }

  if (isValidItin(tin, options)) {
    return 'itin';
  }

  if (isValidEin(tin, options)) {
    return 'ein';
  }
}
