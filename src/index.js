'use strict';

/**
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 *
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 */

/**
 * Module dependencies.
 */

const euTinValidator = require('./validators/eu-tin-validator');
const usTinValidator = require('./validators/us-tin-validator');

/**
 * Constants.
 */

const defaultCountry = 'US';
const defaultEntityType = 'natural-person';
// Excludes ascending sequence as TIN e.g. 123456789.
const sequence = Array.from({ length: 10 }, (_, i) => i).join('').repeat(2);
// Excludes repeated numbers as TIN e.g. 111111111.
const repeatedNumbers = Array.from({ length: 10 }, (_, i) => i).map(current => String(current).repeat(9));
// Excludes descending sequence as TIN e.g. 987654321.
const reverseSequence = sequence.split('').reverse().join('');

/**
 * Run basic TIN validation.
 */

const runBasicValidation = value => {
  const sanitizedValue = value.replace(/\D/g, '');
  const isRepeatedSequence = repeatedNumbers.includes(sanitizedValue);

  if (isRepeatedSequence) {
    return false;
  }

  const isAscendingSequence = sequence.includes(sanitizedValue);
  const isDescendingSequence = reverseSequence.includes(sanitizedValue);

  if (isAscendingSequence || isDescendingSequence) {
    return false;
  }

  return true;
};

/**
 * Export `isValid` function.
 */

module.exports.isValid = async (value, { country = defaultCountry, entityType = defaultEntityType, skipExternalValidations = false } = {}) => {
  const isValid = runBasicValidation(value);

  if (!isValid) {
    return false;
  }

  if (usTinValidator.isCountrySupported(country)) {
    return usTinValidator.isValid(value);
  }

  if (euTinValidator.isCountrySupported(country)) {
    return await euTinValidator.isValid(value, { country, entityType, skipExternalValidations });
  }

  return true;
};

/**
 * Export `mask` funtion.
 */

module.exports.mask = async (value, { 
    country = defaultCountry,
    entityType = defaultEntityType,
    skipExternalValidations = false
  } = {}) => {
  if (usTinValidator.isCountrySupported(country)) {
    return usTinValidator.mask(value);
  }

  if (euTinValidator.isCountrySupported(country)) {
    return await euTinValidator.mask(value, { country, entityType, skipExternalValidations });
  }

  return value;
};

/**
 * Export `sanitize` function.
 */

module.exports.sanitize = (value, { country = defaultCountry, entityType = defaultEntityType } = {}) => {
  if (usTinValidator.isCountrySupported(country)) {
    return usTinValidator.sanitize(value);
  }

  if (euTinValidator.isCountrySupported(country)) {
    return euTinValidator.sanitize(value, { country, entityType });
  }

  return value;
};
