
/**
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 *
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 */

/**
 * Module dependencies
 */

import { default as isValidEin, mask as maskEin }  from 'is-valid-ein';
import { default as isValidItin, mask as maskItin } from 'is-valid-itin';
import { default as isValidSsn, maskSSN as maskSsn } from 'is-valid-ssn';

/**
 * Export isValid function.
 */

export function isValid(tin) {
  return isValidEin(tin) || isValidItin(tin) || isValidSsn(tin);
}

/**
 * Export mask funtion.
 */

export function mask(tin) {
  if (!isValid(tin)) {
    throw new Error('Invalid Taxpayer Identification Number');
  }

  const tinType = type(tin);

  if ('ein' === tinType) {
    return maskEin(tin);
  }

  if ('itin' === tinType) {
    return maskItin(tin);
  }

  if ('ssn' === tinType) {
    return maskSsn(tin);
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
 * NOTE: This is a best effort type guess. There are numbers which are complient with multiple tin validators.
 */

export function type(tin) {
  if (isValidSsn(tin)) {
    return 'ssn';
  }

  if (isValidItin(tin)) {
    return 'itin';
  }

  if (isValidEin(tin)) {
    return 'ein';
  }

  return;
}
