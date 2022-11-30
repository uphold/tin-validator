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
 * Excludes repeated numbers as TIN e.g. 111111111.
 */

var repeatedNumbers = Array.from({ length: 10 }, function (_, i) {
  return i;
}).map(function (current) {
  return String(current).repeat(9);
});

/**
 * Excludes ascending and descending sequence as TIN e.g. 123456789.
 */

/**
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 *
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 */

/**
 * Module dependencies
 */

var sequence = Array.from({ length: 10 }, function (_, i) {
  return i;
}).reduce(function (acc, current) {
  return acc + current;
}, '').repeat(2);
var reverseSequence = sequence.split('').reverse().join('');

/**
 * Export `isValid` function.
 */

function isValid(value) {
  var sanitizedValue = value.replace(/\D/g, '');

  if (repeatedNumbers.indexOf(sanitizedValue) !== -1) {
    return false;
  }

  if (sequence.includes(sanitizedValue) || reverseSequence.includes(sanitizedValue)) {
    return false;
  }

  return (0, _ssnValidator.isValid)(value) || (0, _itinValidator.isValid)(value) || (0, _einValidator.isValid)(value);
}

/**
 * Export `mask` funtion.
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