
/**
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 *
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 */

/**
 * Module dependencies.
 */

const { isValid: isValidEin, mask: maskEin } = require('ein-validator');
const { isValid: isValidItin, mask: maskItin } = require('itin-validator');
const { isValid: isValidSsn, mask: maskSsn } = require('ssn-validator');

/**
 * Excludes repeated numbers as TIN e.g. 111111111.
 */

const repeatedNumbers = Array.from({ length: 10 }, (_, i) => i).map(current => String(current).repeat(9));

/**
 * Excludes ascending and descending sequence as TIN e.g. 123456789.
 */

const sequence = Array.from({ length: 10 }, (_, i) => i).reduce((acc, current) => acc + current, '').repeat(2);
const reverseSequence = sequence.split('').reverse().join('');

/**
 * Export `isValid` function.
 */

module.exports.isValid = value => {
  const sanitizedValue = value.replace(/\D/g, '');

  if (repeatedNumbers.indexOf(sanitizedValue) !== -1) {
    return false;
  }

  if (sequence.includes(sanitizedValue) || reverseSequence.includes(sanitizedValue)) {
    return false;
  }

  return isValidSsn(value) || isValidItin(value) || isValidEin(value);
};

/**
 * Export `mask` funtion.
 */

module.exports.mask = value => {
  if (!module.exports.isValid(value)) {
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
};

/**
 * Sanitize value.
 */

module.exports.sanitize = value => {
  return String(value).replace(/\D+/g, '');
};
