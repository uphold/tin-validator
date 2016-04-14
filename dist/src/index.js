'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValid = isValid;
exports.mask = mask;
exports.sanitize = sanitize;

var _einValidator = require('ein-validator');

var _itinValidator = require('itin-validator');

var _ssnValidator = require('ssn-validator');

/**
 * Export `isValid` function.
 */

function isValid(value) {
  return (0, _ssnValidator.isValid)(value) || (0, _itinValidator.isValid)(value) || (0, _einValidator.isValid)(value);
}

/**
 * Export `mask` funtion.
 */

/**
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 *
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 */

/**
 * Module dependencies
 */

function mask(value) {
  if (!isValid(value)) {
    throw new Error('Invalid Taxpayer Identification Number');
  }

  if ((0, _einValidator.isValid)(value)) {
    return (0, _einValidator.mask)(value);
  }

  if ((0, _itinValidator.isValid)(value)) {
    return (0, _itinValidator.mask)(value);
  }

  if ((0, _ssnValidator.isValid)(value)) {
    return (0, _ssnValidator.mask)(value);
  }
}

/**
 * Sanitize value.
 */

function sanitize(value) {
  return String(value).replace(/\D+/g, '');
}