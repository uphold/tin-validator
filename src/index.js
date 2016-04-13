
/**
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 *
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 */

/**
 * Module dependencies
 */

import { isValid as isValidEin, mask as maskEin } from 'ein-validator';
import { isValid as isValidItin, mask as maskItin } from 'itin-validator';
import { isValid as isValidSsn, mask as maskSsn } from 'ssn-validator';

/**
 * Export `isValid` function.
 */

export function isValid(value) {
  return isValidSsn(value) || isValidItin(value) || isValidEin(value);
}

/**
 * Export `mask` funtion.
 */

export function mask(value) {
  if (!isValid(value)) {
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
 * Sanitize value.
 */

export function sanitize(value) {
  return String(value).replace(/\D+/g, '');
}
