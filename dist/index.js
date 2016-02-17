'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValid = isValid;
exports.type = type;
exports.mask = mask;
exports.sanitize = sanitize;

var _isValidEin = require('is-valid-ein');

var _isValidEin2 = _interopRequireDefault(_isValidEin);

var _isValidItin = require('is-valid-itin');

var _isValidItin2 = _interopRequireDefault(_isValidItin);

var _isValidSsn = require('is-valid-ssn');

var _isValidSsn2 = _interopRequireDefault(_isValidSsn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export isValid function.
 */

function isValid(tin) {
  return (0, _isValidEin2.default)(tin) || (0, _isValidItin2.default)(tin) || (0, _isValidSsn2.default)(tin);
}

/**
 * Export type function.
 *
 * NOTE: This is a best effort guess. There are numbers which are compliant with multiple tin validators.
 */

/**
 * See `http://www.irs.gov/Individuals/International-Taxpayers/Taxpayer-Identification-Numbers-TIN` for more information.
 *
 * A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws.
 */

/**
 * Module dependencies
 */

function type(tin) {
  if ((0, _isValidSsn2.default)(tin)) {
    return 'ssn';
  }

  if ((0, _isValidItin2.default)(tin)) {
    return 'itin';
  }

  if ((0, _isValidEin2.default)(tin)) {
    return 'ein';
  }

  return;
}

/**
 * Export mask funtion.
 */

function mask(tin) {
  if (!isValid(tin)) {
    throw new Error('Invalid Taxpayer Identification Number');
  }

  var tinType = type(tin);

  if (tinType === 'ein') {
    return (0, _isValidEin.mask)(tin);
  }

  if (tinType === 'itin') {
    return (0, _isValidItin.mask)(tin);
  }

  if (tinType === 'ssn') {
    return (0, _isValidSsn.mask)(tin);
  }
}

/**
 * Sanitize tin.
 */

function sanitize(tin) {
  return String(tin).replace(/[^0-9]+/g, '');
}